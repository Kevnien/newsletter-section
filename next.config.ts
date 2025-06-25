import type { NextConfig } from "next";

const repo = "newsletter-section";

const nextConfig: NextConfig = {
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
