import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import wyw from "@wyw-in-js/vite";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@fe": path.resolve("./frontend"),
      "@": path.resolve("./src"),
    },
  },
  preview: {
    port: 1234,
  },
  plugins: [
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
    react(),
  ],
});
