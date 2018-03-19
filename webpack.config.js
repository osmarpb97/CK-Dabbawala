const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  entry: {
    auth: './src/js/auth/auth.js',
    sales: './src/js/sales/sales.js'
  },
  output: {
    path: path.resolve(__dirname, 'cloudkitchen/static/js/'),
    filename: "[name]-[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader', // inject CSS to page
          use: [{
            loader: "css-loader", // translate CSS into CommonJS modules
            options: {
              url: false,
              minimize: false
            }
          }, {
            loader: 'postcss-loader', // Run post css actions
          }, {
            loader: "sass-loader", // compiles SCSS to CSS
          }
          ]
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [/node_modules/],
        query: {
          presets: ['es2015'],
        }
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin(
      {
        filename: '../css/[name]-[hash].css',
        disable: false,
        allChunks: false
      }
    ),
    new BrowserSyncPlugin(
      {
        proxy: 'http://localhost:8000/',
        files: ['./**/*.html', ],
        open: false
      },
      {
        reload: true
      }
    ),
    // Where webpack stores data about bundles.
    new BundleTracker(
      {
        filename: './webpack-stats.json'
      }
    ),
    // Makes jQuery available in every module.
    new webpack.ProvidePlugin(
      {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }
    ),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      // filename: "vendor.js"
      // (Give the chunk a different name)

      minChunks: Infinity,
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })
  ],
  devtool: '#source-map'
};
