const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './frontend/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public')
  },

  watch: true,
  devtool: 'source-map',

    module: {
    rules: [
      { 
      	test: /\.hbs/, 
      	loader: "handlebars-loader" 
      },

      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env'],
          plugins: ['transform-runtime'],
        }
      }
    },

    {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
     }
   ]
 },

     devServer: {
     	 contentBase: path.resolve(__dirname, 'public'),
    	 hot: true,
    	 inline: true,
    	 publicPath: '/'
    },

  plugins: [
    new UglifyJSPlugin({
    	sourceMap: true
    })
  ]
};