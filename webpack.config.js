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
    clean: true,

    // Asset Resource loader
    assetModuleFilename: "[name][ext]",
  },

  devtool: "source-map",

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
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/, // excludes node_modules from test
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // loaders
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      // assets resource loader
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
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
