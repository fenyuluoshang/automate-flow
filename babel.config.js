module.exports = {
  presets: [
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
        allowDeclareFields: true,
        allExtensions: true,
        allowNamespaces: true
      }
    ],
    ['@babel/preset-react'],
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      {
        onlyRemoveTypeImports: true,
        allowDeclareFields: true,
        allExtensions: true,
        allowNamespaces: true
      },
    ],
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
