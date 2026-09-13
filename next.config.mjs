/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 避免 Terser 抓取并压缩 monaco-editor 内部的 ESM Web Worker 造成语法错误
      config.resolve.alias = {
        ...config.resolve.alias,
        "monaco-editor$": "monaco-editor/esm/vs/editor/editor.api.js",
      };

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
