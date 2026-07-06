/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Recipe images live in /public and are already hand-optimized.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
