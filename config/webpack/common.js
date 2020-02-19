// shared config (dev and prod)
const { resolve } = require("path");
const dotenv = require("dotenv");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const BASE_PATH = resolve(__dirname, "../..");

// load environment file
const env = dotenv.config().parsed;

// parse environment file info for webpack format
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  resolve: {
    extensions: [".json", ".js", ".jsx"],
    alias: {
      assets: `${BASE_PATH}/src/assets`,
      components: `${BASE_PATH}/src/components`,
      lib: `${BASE_PATH}/src/lib`,
      pages: `${BASE_PATH}/src/pages`,
      store: `${BASE_PATH}/src/store`
    }
  },
  context: `${BASE_PATH}/src`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "source-map-loader"]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ["file-loader?name=[name].[ext]"]
      },
      {
        test: /\.svg$/i,
        exclude: /assets/,
        loaders: ["file-loader"]
      },
      {
        test: /\.svg$/i,
        include: /assets/,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin(envKeys), // init environment variables
    new HtmlWebpackPlugin({
      template: `${BASE_PATH}/public/index.html`
    }),
    new CopyWebpackPlugin([
      {
        from: "../public/locales/**/*",
        to: "./locales",
        flatten: true
      }
    ])
  ]
};
