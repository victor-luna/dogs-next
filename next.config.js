/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dogsapi.origamid.dev',
      },
    ],
  },
}

module.exports = nextConfig
