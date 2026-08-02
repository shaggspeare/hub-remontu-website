import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  trailingSlash: true,
  images: {
    unoptimized: false,
    domains: ["hubremontu.ua"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hubremontu.ua",
        pathname: "/api/images/file/**",
      },
      {
        protocol: "https",
        hostname: "hub-remontu.payloadcms.app",
        pathname: "/api/images/file/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        pathname: "/api/**",
      },
    ],
  },
  compiler: {
    removeConsole: false,
  },
  experimental: {
    staleTimes: {
      dynamic: 0,
      static: 0,
    },
  },
  // Local dev connects to the production database, so image docs exist
  // locally but the actual files only live on the production host's disk
  // (no S3/CDN adapter is configured, see src/scripts/backfillImageThumbnails.ts).
  // Proxy file requests to prod so images render in local dev.
  async rewrites() {
    if (process.env.NODE_ENV !== "development") return [];
    return [
      {
        source: "/api/images/file/:path*",
        destination: "https://hubremontu.ua/api/images/file/:path*",
      },
    ];
  },
};

export default withPayload(nextConfig);
