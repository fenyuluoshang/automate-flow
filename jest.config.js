module.exports = {
  collectCoverageFrom: [
    'web/src/**/*{.js,.jsx,.ts,.tsx}',
    'server/**/*{.js,.jsx,.ts,.tsx}',
    'shared/**/*{.js,.jsx,.ts,.tsx}',
    '!server/dev.ts',
    '!server/index.ts',
  ],
}
