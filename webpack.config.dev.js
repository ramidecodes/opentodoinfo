// import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {

  devtool: 'source-map',
  context: __dirname + '/src',
  entry: {
    app: './index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: '/dist/'
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
        use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				}),
      },
      // Loaders for other file types can go here
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: "css-loader!sass-loader",
        }),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].bundle.css',
      allChunks: true,
    }),
  ],
};
