const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // entry point for Webpack
  output: {
    filename: "main.js", // where to put it

    // where to output the code; requires "path" module from Node.js
    // "dist" is a folder the code goes in
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. injects styles into DOM
          "css-loader", // 2: turns CSS into JS
          "sass-loader", // 1: turns SCSS/SASS into CSS
        ],
      },
    ],
  },
};
