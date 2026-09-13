/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // 强制使用 monaco-editor 的已编译 bundle，避免 terser 对 ESM worker 语法报错
      config.resolve.alias = {
        ...config.resolve.alias,
        'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api',
      };
    }
    return config;
  },
};

export default nextConfig;
