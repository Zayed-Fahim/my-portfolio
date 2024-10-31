// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "standalone",
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
  crossOrigin: "anonymous",
  pageExtensions: ["ts", "tsx"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/a/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "/u/**",
      },
    ],
  },
};

export default nextConfig;
