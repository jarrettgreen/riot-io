module.exports = {
    entry: './client/app.js',
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['','.js']
    },
    module: {
      loaders: [{
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }]
    }

}
