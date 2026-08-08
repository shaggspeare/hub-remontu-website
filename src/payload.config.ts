// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";
import { en } from "@payloadcms/translations/languages/en";
import { uk } from "@payloadcms/translations/languages/uk";

import { Users } from "./collections/Users";
import { Folders } from "./collections/Folders";
import { Images } from "./collections/Images";
import { Projects } from "@/collections/Projects";
import { Pages } from "@/collections/Pages";
import { SEO } from "@/collections/SEO";
import TeamMembers from "@/collections/TeamMembers";
import { WhatWeDoItems } from "@/collections/WhatWeDoItems";
import { HeroSection } from "@/globals/HeroSection";
import { PricingPage } from "@/globals/PricingPage";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  i18n: {
    supportedLanguages: { en, uk },
  },
  collections: [Users, Folders, Images, Projects, Pages, SEO, TeamMembers, WhatWeDoItems],
  globals: [HeroSection, PricingPage],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: ["http://localhost:3000", "https://hubremontu.ua"],
});
