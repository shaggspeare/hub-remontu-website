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
        pathname: "/api/media/file/**",
      },
      {
        protocol: "https",
        hostname: "hub-remontu.payloadcms.app",
        pathname: "/api/media/file/**",
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
};

export default withPayload(nextConfig);
