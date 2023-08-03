/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**.pixabay.com',
  //     },
  //   ],
  // },
  images: {
    domains: ['images.unsplash.com', '**.pixabay.com'],
  },
};

module.exports = nextConfig;
