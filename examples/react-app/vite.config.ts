import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      stream: "stream-browserify",
      buffer: "buffer",
      "@crossuikit/core": path.resolve(
        __dirname,
        "../../packages/core/src/index.ts",
      ),
    },
  },
  optimizeDeps: {
    include: ["@crossuikit/core"],
  },
});
