// path: /usr/local/var/www/mjjun/rollup.config.js

import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import { spawn } from "child_process";
import sveltePreprocess from "svelte-preprocess";
import postcss from "rollup-plugin-postcss";
import json from "@rollup/plugin-json";

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = spawn("npm", ["run", "start", "--", "--dev"], {
        stdio: ["ignore", "inherit", "inherit"],
        shell: true,
      });

      process.on("SIGTERM", toExit);
      process.on("exit", toExit);
    },
  };
}

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "es", // 'iife'에서 'es'로 변경
    dir: "public/build", // 'file' 대신 'dir' 사용
  },
  plugins: [
    json(),
    svelte({
      preprocess: sveltePreprocess({
        postcss: true,
      }),
      compilerOptions: {
        dev: !production,
      },
    }),
    postcss({
      extract: "bundle.css",
      minimize: production,
      use: [
        [
          "sass",
          {
            includePaths: ["./src/theme", "./node_modules"],
          },
        ],
      ],
      extensions: [".css"],
      plugins: [require("tailwindcss"), require("autoprefixer")],
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
      exportConditions: ["svelte"],
    }),
    commonjs(),
    !production && serve(),
    !production && livereload("public"),
    production && terser(),
  ],
  watch: {
    clearScreen: false,
  },
};
