var path = require('path');
console.log(path.resolve(__dirname));

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: './assets/js/main.js',
    path: path.resolve(__dirname)
  }
};