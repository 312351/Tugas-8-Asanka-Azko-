import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d12grbvu52tm8q.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
