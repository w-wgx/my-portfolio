import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "trae-api-cn.mchost.guru",
      },
    ],
  },
};

export default nextConfig;
