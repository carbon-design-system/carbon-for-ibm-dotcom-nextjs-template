require("dotenv").config();
const path = require("path");
const sass = require("sass");

module.exports = {
  swcMinify: true,
  assetPrefix: ".",
  basePath: process.env.BASE_PATH || "",
  sassOptions: {
    implementation: sass,
    includePaths: [path.resolve(__dirname, "node_modules")],
  },
  env: {
    ALTLANG_ROOT_PATH: process.env.ALTLANG_ROOT_PATH || "/",
    ENABLE_RTL: process.env.ENABLE_RTL || "false",
  },
};
