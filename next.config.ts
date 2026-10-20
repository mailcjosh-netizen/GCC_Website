import type { NextConfig } from "next";

// For GitHub Pages the site lives at /GCC_Website, so the deploy workflow sets
// NEXT_PUBLIC_BASE_PATH=/GCC_Website. Locally it is empty and the site runs at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export", // build a static site into /out (needed for GitHub Pages)
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
