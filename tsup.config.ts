import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    index:           "src/index.ts",
    "tailwind.config": "src/tailwind.config.ts",
    "tokens/index":  "src/tokens/index.ts",
  },
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "tailwindcss"],
});
