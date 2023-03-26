const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './src/index.js',
    dom_interface: './src/dom_interface.js',
    sections: './src/sections.js',
    tasks: './src/tasks.js',
    main_content: './src/main_content.js',
    local_storage: './src/local_storage.js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo:// - A Todo list Web App'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: (pathData) => {
      const filepath = path
        .dirname(pathData.filename)
        .split('/')
        .slice(1)
        .join('/')
      return `${filepath}/[hash][ext][query]`
    },
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  optimization: {
    runtimeChunk: 'single'
  }
}
