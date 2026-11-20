import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true,
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
  devIndicators: {
    appIsrStatus: true,
    buildActivity: false,
    buildActivityPosition: "bottom-left",

  },
};

export default nextConfig;
