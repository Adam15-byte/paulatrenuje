/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,DELETE,PATCH,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['static.przelewy24.pl', 'przelewy24.pl', 'secure.przelewy24.pl'],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.przelewy24.pl',
        port: '',
        pathname: '/image/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'aceternity.com',
        port: '',
        pathname: '/images/products/thumbnails/new/**',
      },
      {
        protocol: 'https',
        hostname: 'paulatrenuje.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
