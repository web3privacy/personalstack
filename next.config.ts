import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // TODO add appropriate setup
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
