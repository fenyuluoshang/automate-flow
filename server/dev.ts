import webpackMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import express from 'express'
import expressApp from './index'
import path from 'path'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const compiler = webpack(require(path.resolve(__dirname, '../web/webpack.config.js')))

const app = express()

app.use(expressApp)

app.use(
  webpackMiddleware(compiler)
)

app.listen(3000, () => {})
