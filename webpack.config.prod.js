// import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  devtool: 'source-map',
  entry: {
    vendor: __dirname + '/src/vendor',
    main: __dirname + '/src/index'
  },
  target: 'web',
  output: {
    path: __dirname + '/dist',
    filename: '[name].[chunkhash].js',
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
    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin('[name].[contenthash].css'),
    // Hash the files using MD5 so that their names change when the content changes.
    new WebpackMd5Hash(),
    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // Eliminate duplicate packages when generating bundle
    // new webpack.optimize.DedupePlugin(),
    // Minifi JS
    new webpack.optimize.UglifyJsPlugin(),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    })
  ],
};
