import webpack from 'webpack'
import path from 'path'

const TARGET = process.env.npm_lifecycle_event

let Config = {
  mode: 'development',
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    path.join(path.resolve(__dirname, 'src'), 'client.jsx')
  ],
  output: {
    path: path.join(path.resolve(__dirname), 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react-hmre']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

export default Config
