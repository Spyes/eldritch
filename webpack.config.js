var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var env = process.env.MIX_ENV || 'dev';

module.exports = {
  output: {
    path: __dirname + "/public/build",
    filename: "./app.js"
  },

  // Necessary plugins for hot load
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],

  entry: [
//    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './public/js/index' // Your appʼs entry point
  ],
  
  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-2'],
        }
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: 'style!css!less' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, loaders: ["file-loader"] },
      {include: /\.json$/, loaders: ["json-loader"]}
    ]
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules']
  },

}
