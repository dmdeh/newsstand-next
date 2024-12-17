import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s.pstatic.net"],
    // Error: Invalid src prop hostname "s.pstatic.net" is not configured under images in your next.config.js
  },
};

export default nextConfig;
