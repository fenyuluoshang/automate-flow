import path from 'path'
import webpackMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import express from 'express'
import expressApp from './index'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const compiler = webpack({
  mode: 'development',
  ...require(path.resolve(__dirname, '../web/webpack.config.js'))
})

const app = express()

app.use(expressApp)

app.use(
  webpackMiddleware(compiler)
)

app.listen(3000, () => {})
