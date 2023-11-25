import * as fs from "fs";
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Substitua 'src' pelo diretório raiz do seu projeto
    },
  },
  plugins: [reactVirtualized()],
});
const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;
export function reactVirtualized() {
  return {
    name: "my:react-virtualized",
    configResolved() {
      const file = require
        .resolve("react-virtualized")
        .replace(
          path.join("dist", "commonjs", "index.js"),
          path.join("dist", "es", "WindowScroller", "utils", "onScroll.js"),
        );
      const code = fs.readFileSync(file, "utf-8");
      const modified = code.replace(WRONG_CODE, "");
      fs.writeFileSync(file, modified);
    },
  };
}

// "repository": {
//   "type": "git",
//   "url": "git+https://github.com/lchenrique/ds-test-ui"
// },
// "publishConfig": {
//   "registry": "https://npm.pkg.github.com/ds-test-ui/design-system"
// },