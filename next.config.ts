import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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
