const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

/** 编译模式 */
const mode = isProduction ? 'production' : 'development';
/** 生产关闭source-map */
const devtool = !isProduction && 'source-map';
/** 开发服务配置 */
const devServer = isProduction ? {} : {
  open: ['http://localhost:3000'],
  port: 3036,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
  }
};
/** 样式策略，生产提取/开发注入 */
const styleStrategy = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

module.exports = {
  mode,
  devtool,
  devServer,
  entry: {
    // application: "./app/javascript/application.js",
    app: './app/javascript/application.tsx',
    vendor: ['react', 'react-dom']
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /\.(s[ac]ss|css)$/i,
      use: [
        styleStrategy,
        'css-loader',
        'postcss-loader'
      ]
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      '@components': path.resolve('app/javascript/src/components'),
      '@services': path.resolve('app/javascript/src/services'),
      '@hooks': path.resolve('app/javascript/src/hooks'),
      '@utils': path.resolve('app/javascript/src/utils')
    }
  },
  output: {
    filename: isProduction ? '[name]-[contenthash].digested.js' : '[name].js',
    chunkFilename: '[name]-[contenthash].digested.chunk.js',
    sourceMapFilename: '[file].map',
    path: path.join(process.cwd(), 'app/assets/builds/')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name]-[contenthash].digested.css'
    }),
    new ESLintPlugin({
      context: 'app/javascript/**/*.tsx',
      failOnWarning: true
    })
  ],
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin()
    ]
  }
};
