/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 1. 让 Webpack 解析 monaco-editor 时直接指向纯 API 单文件，切断对 worker 文件的静态抓取
      config.resolve.alias = {
        ...config.resolve.alias,
        "monaco-editor$": "monaco-editor/esm/vs/editor/editor.api.js",
      };

      // 2. 避免 node 模块在浏览器端报错
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
