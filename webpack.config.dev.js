import path from 'path';
// import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  target: 'web',
  devtool: 'source-map',
  context: path.resolve(__dirname, './src'),
  entry: {
    vendor: './vendor',
    main: './index'
  },
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      // Loaders for other file types can go here
      {
        test: /\.sass$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ],
  },
  plugins: [
    // new ExtractTextPlugin({
    //   filename: '[name].bundle.css',
    //   allChunks: true,
    // }),
    // new ExtractTextPlugin('styles.css')
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ],
};
