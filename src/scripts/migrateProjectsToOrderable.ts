import { getPayload } from "payload";
import { generateNKeysBetween } from "payload/shared";
import config from "../payload.config";

// One-time migration: backfill the new `_order` fractional-index field (added
// by `orderable: true` on the Projects collection) from the legacy numeric
// `order` field, preserving the current on-site display order.
async function run() {
  const payload = await getPayload({ config });

  const { docs } = await payload.find({
    collection: "projects",
    sort: ["order", "createdAt"],
    limit: 0,
    depth: 0,
  });

  if (docs.length === 0) {
    console.log("No projects found.");
    return;
  }

  const keys = generateNKeysBetween(null, null, docs.length);

  for (const [index, doc] of Array.from(docs.entries())) {
    await payload.update({
      collection: "projects",
      id: doc.id,
      data: {
        _order: keys[index],
      } as never,
      depth: 0,
    });
    console.log(`[${index + 1}/${docs.length}] ${doc.title} -> ${keys[index]}`);
  }

  console.log("Done.");
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
