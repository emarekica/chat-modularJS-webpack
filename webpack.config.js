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
};
