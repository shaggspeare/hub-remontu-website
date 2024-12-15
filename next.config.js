const { withPayload } = require("@payloadcms/next/withPayload");
/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  trailingSlash: true,
  images: {
    unoptimized: false,
  },
}

module.exports = withPayload(withPayload(nextConfig))
