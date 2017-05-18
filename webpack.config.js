module.exports = {
  entry: ['app/app.js'],
  output: {
    path: __dirname,
    filename: 'public/bundle.js'
  },
  resolve: {
    modules: [
      __dirname,
      'node_modules',
      './app/components',
      './app/api'
    ],
    alias: {
      Main: 'app/components/Main.js',
      actions: 'app/actions/actions.js',
      reducers: 'app/reducers/reducers.js'
    },
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      },
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  }
}
