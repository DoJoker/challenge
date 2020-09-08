const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: devMode ? '[name].css' : '[name].[hash].css',
        chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
      })
    ],
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
      rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.txt$/i,
            use: 'raw-loader',
          },
        {
            test: /\.(scss)$/,
            use: [{
              loader: 'style-loader', // inject CSS to page
            }, {
              loader: 'css-loader', // translates CSS into CommonJS modules
            }, {
              loader: 'postcss-loader', // Run postcss actions
              options: {
                plugins: function () { // postcss plugins, can be exported to postcss.config.js
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            }, {
              loader: 'sass-loader' // compiles Sass to CSS
            }]
          },
          { test: /\.css$/, loader: "style-loader!css-loader" },
        {
            test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[path][name]-[hash:8].[ext]"
                }
              }
            ]
        }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "src", "index.html")
          })/*,
          new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
          })*/
    ]
  };