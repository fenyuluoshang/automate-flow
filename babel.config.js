module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-typescript', { onlyRemoveTypeImports: true }]
  ],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        root: __dirname,
        rootPathSuffix: './',
        rootPathPrefix: '~/'
      }
    ],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    'babel-plugin-typescript-decorators'
  ]
}
