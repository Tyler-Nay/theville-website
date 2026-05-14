import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xuebagrzksnmucihdplb.supabase.co",
      },
    ],
  },
};

export default nextConfig;