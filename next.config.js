import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // For Static Export
  trailingSlash: true,
  images: {
    domains: ['hub-remontu.payloadcms.app'],
    unoptimized: false,
  },
  compiler: {
    removeConsole: false,
  },
}

export default withPayload(nextConfig)
