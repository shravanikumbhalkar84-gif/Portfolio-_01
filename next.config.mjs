/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactCompiler: true,
  devIndicators: false,
  basePath,
  images: {
    unoptimized: true,
    qualities: [75, 80, 95, 100],
  },
};

export default nextConfig;
