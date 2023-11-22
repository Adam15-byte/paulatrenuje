/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    domains: ['static.przelewy24.pl', 'przelewy24.pl'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.przelewy24.pl',
        port: '',
        pathname: '/image/upload/**',
      },
    ],
  },
};
