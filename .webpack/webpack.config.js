var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const devMode = false;
module.exports = {
  entry: [
    './warren/themes/babyshopqn/src/js/index.js',
    './warren/themes/babyshopqn/src/sass/main.scss'      // file nguồn  CSS
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,"../warren/themes/babyshopqn/assets/js")
  },
  module: {
    rules: [
        {
          // Thiết lập build scss
          test: /\.s?css$/,
          // test: /\.(sa|sc)ss$/,
          exclude: /node_modules/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
           
          ]
        },
        {
          test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
          loader: 'file-loader',
        },
        {
            // Thiết lập lưu các ảnh sử dụng bởi CSS
            // lưu dưới đường dẫn images cùng file site.css
            test: /\.(png|jpe?g|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        // Image sử dụng bởi CSS lưu tại
                        publicPath: '../img',
                        emitFile: false
                    }
                }
            ]
        }
    ]
  },

  plugins: [
    // Xuất kết quả với CSS - sau khi qua loader MiniCssExtractPlugin.loader
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? `../css/[name].css` : `../css/[name].css`,
      chunkFilename: devMode ? '[id].css' : '[id].css',
    }),
  ]
};