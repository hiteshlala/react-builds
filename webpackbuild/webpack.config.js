const path = require( 'path' );
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
const CopyWebpackPlugin = require('copy-webpack-plugin')

const src = path.resolve( __dirname, 'src' );
const dest = path.resolve( __dirname, 'build' );

module.exports = {
  mode: 'production',
  entry: {
    builtindex: path.join( src, '/index.jsx'),
    builtone: path.join( src, '/one.jsx' ),
    builttwo: path.join( src, '/two.jsx'),
  },
  output: {
    path: dest,
    filename: '[name].js'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({}) // for this to work, the mode above has to be set to 'production'
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/*.html',
          to: '[name].html'
        }
      ]
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [ 
                '@babel/preset-env', 
                { 
                  targets: 'defaults', 
                  modules: 'commonjs'
                } 
              ],
              [ '@babel/preset-react' ]
            ]
          }
        }
      }
    ]
  }
};


