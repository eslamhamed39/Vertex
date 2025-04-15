const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // باقي الإعدادات ...
    plugins: [
    new CleanWebpackPlugin(),
    // إضافات أخرى...
    ]
};
