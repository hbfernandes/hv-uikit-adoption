// development config
const { resolve } = require("path");
const merge = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const commonConfig = require("./common");
const dotenv = require("dotenv");

// load environment file
const env = dotenv.config().parsed;

// parse environment file info for webpack format
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://localhost:" + process.env.PORT, // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.js" // the entry point of our app
  ],
  output: {
    path: resolve(__dirname, "../../build"),
    publicPath: "/"
  },
  devServer: {
    hot: true, // enable HMR on the server,
    historyApiFallback: true,
    port: process.env.PORT
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new webpack.DefinePlugin(envKeys) // init environment variables
  ],
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  resolve: {
    alias: {
      react: path.resolve("./node_modules/react")
    }
  }
});
