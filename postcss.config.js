const rtlcss = require("rtlcss");
require("dotenv").config();

/**
 * Define the postcss plugins
 *
 * @type {[]}
 */
const plugins = [
  "postcss-flexbugs-fixes",
  [
    "postcss-preset-env",
    {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
  ],
];

// Adds rtlcss if configured in environment variables
if (process.env.ENABLE_RTL === "true") {
  plugins.push(rtlcss);
}

module.exports = {
  plugins,
};
