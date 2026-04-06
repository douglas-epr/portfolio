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
};

export default nextConfig;
