import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.tsx"],
  format: ["cjs", "esm"],
  outDir: "dist",
  bundle: true,
  clean: true,
  splitting: false,
  dts: true,
});
