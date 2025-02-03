import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/catenary-labs-site', 
  assetPrefix: '/catenary-labs-site/', 
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
