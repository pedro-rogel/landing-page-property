import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images : {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.mbras.com.br',
        port: '',
        pathname: '/**'
      },
      {
         protocol: 'https',
        hostname: 'img.mbras.com.br',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
