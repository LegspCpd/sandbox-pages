/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 阻止 Webpack 把 Monaco 的 worker 文件作为普通的 JS 模块压缩打包
      config.module.rules.push({
        test: /editorWebWorkerMain\.js$/,
        use: 'ignore-loader',
      });

      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
