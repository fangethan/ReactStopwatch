var webpack = require("webpack")
var path = require("path");

module.exports = {
  entry: [
    "script!jquery/dist/jquery.min.js",
    "script!foundation-sites/dist/foundation.min.js",
    './app/app.jsx',
  ],
  externals: {
    jquery: "jQuery",
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$": "jquery",
      "jQuery": "jquery",
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: "app/components/Main.jsx",
      Navigation: "app/components/Navigation.jsx",
      Timer: "app/components/Timer.jsx",
      Countdown: "app/components/Countdown.jsx",
      CountdownForm: "app/components/CountdownForm.jsx",
      Clock: "app/components/Clock.jsx",
      Controls: "app/components/Controls.jsx",
      applicationStyles: "app/styles/app.scss",
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', "stage-0"]
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, "./node_modules/foundation-sites/scss")
    ]
  },
};
