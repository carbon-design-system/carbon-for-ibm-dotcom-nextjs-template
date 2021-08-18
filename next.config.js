const path = require("path");
require("dotenv").config();

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
