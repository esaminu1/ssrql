import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack.config.babel';
import webpack from 'webpack';

const bundler = webpack(config);

const middleware = [
  webpackDevMiddleware(bundler, {
    filename: config.output.filename,
    publicPath: config.output.publicPath,
    hot: true
  }),
  webpackHotMiddleware(bundler, {
    log: console.log
  })
];

export default middleware