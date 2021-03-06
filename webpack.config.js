var webpack = require('webpack');
var path = require('path');

var isProduction = function () {
  return process.env.NODE_ENV === 'production';
};

var entry = './index.js';
var outputPath = './build';

var plugins = [];
if( isProduction() ) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      test: /(\.jsx|\.js)$/,
      compress: {
        warnings: false
      },
    })
  );
}

var config = {
  target: 'web',
  cache: true,
  entry: entry,
  output: {
    path: path.join(__dirname, outputPath),
    filename: 'js/index.bundle.js',
    publicPath: isProduction()? 'http://localhost:3000/':'http://localhost:3000/',
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel?presets[]=es2015&presets[]=react&presets[]=stage-0',
        exclude: /node_modules/
      },
        { test: /\.css$/, loader: "style!css" },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url?limit=8024&name=images/[name].[ext]'
      },
      {
        test: /\.(woff2?|otf|eot|svg|ttf)$/i,
        loader: 'url?name=fonts/[name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'url?name=[name].[ext]'
      },
        {
            test: /\.(mp4)$/,
            loader: 'file'
        },
    ],
  },
  plugins: plugins,
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.jsx']
  },
  devtool: isProduction()?null:'source-map',
};

module.exports = config;
