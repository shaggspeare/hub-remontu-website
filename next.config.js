import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  trailingSlash: true,
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hubremontu.ua',
        pathname: '/api/media/file/**',
      },
      {
        protocol: 'https',
        hostname: 'hub-remontu.payloadcms.app',
        pathname: '/api/media/file/**',
      },
    ],
  },
  compiler: {
    removeConsole: false,
  },
}

export default withPayload(nextConfig)
