import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hubremontu.ua',
        pathname: '/api/media/file/**',
      },
    ],
  },
  compiler: {
    removeConsole: false,
  },
}

export default withPayload(nextConfig)
