import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@crossuikit/core": resolve(__dirname, "../packages/core/src"),
    },
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
    ],
  },
  build: {
    target: "esnext",
    minify: false,
  },
  esbuild: {
    loader: "tsx",
    include: /\.[jt]sx?$/,
    exclude: [],
  },
  server: {
    fs: {
      strict: false,
    },
  },
  css: {
    postcss: resolve(__dirname, './postcss.config.js'),
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
});
