import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ff4-tool/privacy", destination: "/ff4-tool/privacy.html" },
      { source: "/ff4-tool/terms", destination: "/ff4-tool/terms.html" },
      { source: "/ff4-tool/support", destination: "/ff4-tool/index.html" },
      { source: "/ff4-tool/rules", destination: "/ff4-tool/terms.html" },
    ];
  },
};

export default nextConfig;
