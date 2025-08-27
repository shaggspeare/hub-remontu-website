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
    ],
  },
  compiler: {
    removeConsole: false,
  },
  sassOptions: {
    includePaths: ["./src"],
    prependData: `
      $timestamp: "${Date.now()}";
    `,
  },

  // Custom webpack config to handle CSS modules
  webpack: (config, { dev }) => {
    // Find the rule that handles CSS modules
    const rules =
      config.module.rules
        .find((rule) => typeof rule.oneOf === "object")
        ?.oneOf?.filter((rule) => Array.isArray(rule.use)) || [];

    rules.forEach((rule) => {
      rule.use?.forEach((use) => {
        if (use?.loader?.includes?.("css-loader") && use.options?.modules) {
          // Force CSS module class name regeneration
          use.options.modules.localIdentName = dev
            ? "[name]__[local]__[hash:base64:8]"
            : "[hash:base64:8]";

          // Add cache busting
          use.options.modules.hashPrefix = `${Date.now()}`;
        }
      });
    });

    return config;
  },
  // Headers to prevent aggressive caching
  async headers() {
    return [
      {
        source: "/_next/static/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
      {
        source: "/request-quote",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
    ];
  },

  // Generate unique build ID
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

export default withPayload(nextConfig);
