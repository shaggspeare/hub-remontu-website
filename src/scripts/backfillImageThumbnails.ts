import { getPayload } from "payload";
import config from "../payload.config";

// One-time backfill: generate the `thumbnail` image size (added to the
// `images` collection to stop the gallery grid from requesting full-size
// DSLR originals) for docs uploaded before that config existed.
//
// Runs in dry-run mode (report only) unless --write is passed. Must be run
// from the same host/filesystem as the running app (no S3/CDN adapter is
// configured, files live on local disk), e.g. via SSH on the app server or
// as a one-off job on whatever platform serves production.
//
// Usage:
//   npx tsx src/scripts/backfillImageThumbnails.ts                # dry run, all missing
//   npx tsx src/scripts/backfillImageThumbnails.ts --limit 10      # dry run, first 10
//   npx tsx src/scripts/backfillImageThumbnails.ts --write         # actually backfill
//   npx tsx src/scripts/backfillImageThumbnails.ts --write --limit 10
//
// Env:
//   IMAGE_BASE_URL - origin to fetch original files from (defaults to
//     PAYLOAD_PUBLIC_SERVER_URL, then http://localhost:3000)

const args = process.argv.slice(2);
const isWrite = args.includes("--write");
const limitArg = args.indexOf("--limit");
const limit = limitArg !== -1 ? Number(args[limitArg + 1]) : undefined;

const baseUrl =
  process.env.IMAGE_BASE_URL ||
  process.env.PAYLOAD_PUBLIC_SERVER_URL ||
  "http://localhost:3000";

async function run() {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "images",
    limit: 0,
    depth: 0,
  });

  const missing = docs.filter((doc) => !doc.sizes?.thumbnail?.url);
  const targets = typeof limit === "number" ? missing.slice(0, limit) : missing;

  console.log(
    `${docs.length} total images, ${missing.length} missing a thumbnail, processing ${targets.length}.`,
  );
  console.log(isWrite ? "Mode: WRITE" : "Mode: DRY RUN (pass --write to apply)");

  let succeeded = 0;
  let failed = 0;

  for (const [index, doc] of Array.from(targets.entries())) {
    const label = `[${index + 1}/${targets.length}] ${doc.filename}`;

    if (!doc.url || !doc.filename || !doc.mimeType) {
      console.warn(`${label} - skipped, missing url/filename/mimeType`);
      continue;
    }

    if (!isWrite) {
      console.log(`${label} - would backfill (${((doc.filesize || 0) / 1024 / 1024).toFixed(2)}MB)`);
      continue;
    }

    try {
      const res = await fetch(`${baseUrl}${doc.url}`);
      if (!res.ok) {
        throw new Error(`fetch original failed: HTTP ${res.status}`);
      }
      const data = Buffer.from(await res.arrayBuffer());

      await payload.update({
        collection: "images",
        id: doc.id,
        data: {},
        file: {
          data,
          mimetype: doc.mimeType,
          name: doc.filename,
          size: data.length,
        },
        depth: 0,
      });

      console.log(`${label} - done`);
      succeeded += 1;
    } catch (err) {
      console.error(`${label} - FAILED: ${(err as Error).message}`);
      failed += 1;
    }
  }

  console.log(`\nDone. ${succeeded} succeeded, ${failed} failed.`);
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
