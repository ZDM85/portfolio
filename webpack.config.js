const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isDev = env.mode === "development";

  return {
    mode: env.mode ?? "development",
    entry: path.resolve(__dirname, "src", "index.jsx"),
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      isDev && new webpack.ProgressPlugin(),
      !isDev &&
        new MiniCssExtractPlugin({
          filename: "css/[name].[contenthash:8].css",
          chunkFilename: "css/[name].[contenthash:8].css",
        }),
    ],
    devtool: isDev ? "eval-cheap-source-map" : "source-map",
    output: {
      filename: "[name].[contenthash:8].js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    devServer: {
      port: env.port ?? 3000,
      open: true,
      historyApiFallback: true,
    },
    performance: {
      maxAssetSize: 500000,
      maxEntrypointSize: 500000,
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.less$/i,
          use: [
            // compiles Less to CSS
            !isDev ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "less-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
