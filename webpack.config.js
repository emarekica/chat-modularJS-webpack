const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].[contenthash].js",
  },

  devServer: {
    // tell the server what to serve
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true, // npm run dev opens browser automatically
    hot: true, // auto reload
    compress: true, // enables gzip compression
    historyApiFallback: true,
  },

  module: {
    rules: [
      // loaders
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Wall writtings",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
};
