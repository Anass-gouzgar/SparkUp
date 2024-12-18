import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },
  experimental: {
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: false,
    buildActivityPosition: "bottom-left",

  },
};

export default nextConfig;
