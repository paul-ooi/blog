const path = require('path');
const postcssLogical = require('postcss-logical');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './src/dist'),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
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
          {
            loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"postcss-logical",
									],
								],
							},
						},
          }
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
    postcssLogical
  ],
};