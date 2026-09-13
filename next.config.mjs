/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 避免 Terser 去解析 monaco 的 ESM worker 脚本导致编译失败
      config.resolve.alias = {
        ...config.resolve.alias,
        "monaco-editor": "monaco-editor/esm/vs/editor/editor.api.js",
      };
    }
    return config;
  },
};

export default nextConfig;
