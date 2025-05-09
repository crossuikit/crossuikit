import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: [
    "../packages/core/src/**/*.stories.mdx",
    "../packages/core/src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-docs",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: resolve(__dirname, "./vite.config.ts"),
      },
    },
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          "@crossuikit/core": resolve(__dirname, "../packages/core/src"),
        },
      },
      optimizeDeps: {
        ...config.optimizeDeps,
        include: [
          ...(config.optimizeDeps?.include ?? []),
          "react",
          "react-dom",
        ],
      },
      build: {
        ...config.build,
        target: "esnext",
      },
    };
  },
};

export default config;
