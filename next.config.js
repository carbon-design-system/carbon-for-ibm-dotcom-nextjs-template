require("dotenv").config();
const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  basePath: process.env.BASE_PATH || "",
  env: {
    CORS_PROXY: process.env.CORS_PROXY || "",
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
  },
  sassLoaderOptions: {
    includePaths: [path.resolve(__dirname, "node_modules")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      sideEffects: true,
      use: [
        {
          loader: "postcss-loader",
          options: {
            plugins: () => {
              const autoPrefixer = require("autoprefixer")({
                overrideBrowserslist: ["last 1 version", "ie >= 11"],
              });
              return [autoPrefixer];
            },
          },
        },
        {
          loader:
            process.env.NODE_ENV === "production"
              ? "sass-loader"
              : "fast-sass-loader",
          options: {
            includePaths: [path.resolve(__dirname, "node_modules")],
            data: `
              $feature-flags: (
                enable-css-custom-properties: true
              );
            `,
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    });

    return config;
  },
});
