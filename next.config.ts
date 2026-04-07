import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'df4a82bcbf6733b3841743cba7039857.cdn.bubble.io',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://df4a82bcbf6733b3841743cba7039857.cdn.bubble.io https://cdn.simpleicons.org",
              "connect-src 'self' https://api.brevo.com",
              "font-src 'self'",
              "object-src 'none'",
              "frame-src https://www.youtube.com https://www.youtube-nocookie.com",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
