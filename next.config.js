require("dotenv").config();
const path = require("path");
const withSass = require("@zeit/next-sass");
const rtlcss = require("rtlcss");

module.exports = withSass({
  experimental: {
    basePath: process.env.BASE_PATH || "",
  },
  assetPrefix: ".",
  env: {
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
    ENABLE_RTL: process.env.ENABLE_RTL || "false",
  },
  sassLoaderOptions: {
    sassOptions: {
      includePaths: [path.resolve(__dirname, "node_modules")],
    },
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
              return process.env.ENABLE_RTL === "true"
                ? [autoPrefixer, rtlcss]
                : [autoPrefixer];
            },
          },
        },
        {
          loader:
            process.env.NODE_ENV === "production"
              ? "sass-loader"
              : "fast-sass-loader",
          options: Object.assign(
            process.env.NODE_ENV === "production"
              ? {
                  sassOptions: {
                    includePaths: [path.resolve(__dirname, "node_modules")],
                  },
                }
              : {
                  includePaths: [path.resolve(__dirname, "node_modules")],
                },
            {
              additionalData: `
              $feature-flags: (
                enable-css-custom-properties: true
              );
            `,
              sourceMap: process.env.NODE_ENV !== "production",
            }
          ),
        },
      ],
    });

    return config;
  },
});
