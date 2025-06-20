const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  plugins: [
    new CompressionPlugin({
      filename: '[path][base].gz', // ينشئ ملفات .gz بجوار الملفات الأصلية
      algorithm: 'gzip',
      test: /\.(js|css|html|svg)$/, // الملفات التي سيتم ضغطها
      threshold: 10240,             // فقط الملفات أكبر من 10KB
      minRatio: 0.8                 // يجب أن يقل الحجم المضغوط بنسبة 20% على الأقل
    })
  ]
};

