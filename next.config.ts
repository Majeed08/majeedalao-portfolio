import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "172.20.10.14",
    "172.20.10.11",
    "192.168.48.1",
  ],
};

export default nextConfig;
