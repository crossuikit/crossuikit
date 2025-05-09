import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  resolve: {
    extensions: ["mdx", ".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@crossuikit/core": resolve(__dirname, "packages/core/src"),
      "@crossuikit/react": resolve(__dirname, "packages/react/src"),
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
