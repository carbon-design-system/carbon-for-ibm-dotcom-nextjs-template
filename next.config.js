require("dotenv").config();
const path = require("path");
const rtlcss = require("rtlcss");

const postcssPlugins = [];

if (process.env.ENABLE_RTL === "true") {
  postcssPlugins.push(rtlcss);
}

module.exports = {
  assetPrefix: ".",
  basePath: process.env.BASE_PATH || "",
  env: {
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
    ENABLE_RTL: process.env.ENABLE_RTL || "false",
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, "node_modules")],
    additionalData: `
      $feature-flags: (
        enable-css-custom-properties: true
      );
    `,
  },
};
