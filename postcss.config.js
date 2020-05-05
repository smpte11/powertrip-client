/* eslint-disable @typescript-eslint/no-var-requires */
const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");
const colorfunction = require("postcss-color-function");

module.exports = {
  plugins: [autoprefixer, tailwindcss, colorfunction],
};
