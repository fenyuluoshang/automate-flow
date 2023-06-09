const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ProvidePlugin } = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, '../dist/web/'),
    filename: 'static/js/[name].[chunkhash:8].js',
    chunkFilename: 'static/js/[name].[chunkhash:8].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.wasm']
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
              '@babel/preset-react',
              '@babel/preset-typescript'
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(?:css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(?:png|jpg|jpeg|gif|svg|ico|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }]
    },
    allowedHosts: 'all',
    client: {
      overlay: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new ProvidePlugin({
      React: 'react' // automatically import react where needed
    })
  ]
}
