const path = require('path');
const postcssLogical = require('postcss-logical');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './src/dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader"},
          { loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false
            } },
          { loader: "css-loader"},
          { loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                fiber: false,
                outputStyle: "compressed",
              },
              sourceMap: true,
            },
          },
        ],
      },
     
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    // postcssLogical
  ],
};