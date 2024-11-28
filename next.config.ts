import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.oneggy.com',
        port: '', // leave blank for default port
        pathname: '/**', // matches all paths
      },
    ],
  },
};

export default nextConfig;
