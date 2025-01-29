import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: [
    {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
        banner: '"use client";' // ✅ Ensures "use client" stays in the final output
      },
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        banner: '"use client";'
      }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-env",
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
      ],
      plugins: [["@babel/plugin-syntax-explicit-resource-management"]],
      extensions: [".js", ".jsx"],
    }),
  ],
  external: ["react", "react-dom", "prop-types"],
};
