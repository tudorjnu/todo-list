const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Development",
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
          esModule: false,
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    // runtimeChunk: "single",
  },
};
