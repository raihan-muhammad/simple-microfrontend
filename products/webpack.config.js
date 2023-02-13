const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const htmlWebpackPlugin = require('html-webpack-plugin'); 
module.exports = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "products",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductsIndex": "./src/index",
      },
      shared: ['faker']
    }),
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};