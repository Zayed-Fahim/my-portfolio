// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // trailingSlash: true,
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  crossOrigin: "anonymous",
  pageExtensions: ["ts", "tsx"],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
