module.exports = {
    entry: './client/app.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-2']
          },
          test: /\.js?$/,
          exclude: /(node_modules|bower_components)/
        }
      ]
    }

}
