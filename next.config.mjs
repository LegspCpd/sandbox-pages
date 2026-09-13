/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false, // 关闭 SWC 压缩，避免 Terser 压缩 worker 文件时报错
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    // 忽略特定 worker 文件的最小化压缩错误
    config.optimization = {
      ...config.optimization,
      minimize: false, // 禁用客户端 JS 压缩
    };
    return config;
  },
};

export default nextConfig;
