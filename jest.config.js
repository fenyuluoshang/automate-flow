module.exports = {
  collectCoverageFrom: [
    'web/src/**/*{.js,.jsx,.ts,.tsx}',
    'server/**/*{.js,.jsx,.ts,.tsx}',
    'shared/**/*{.js,.jsx,.ts,.tsx}',
    '!server/dev.ts',
    '!server/index.ts'
  ],
  moduleNameMapper: {
    '~server/(.*)': ['<rootDir>/server/$1'],
    '~web/(.*)': ['<rootDir>/web/$1'],
    '~shared/(.*)': ['<rootDir>/shared/$1'],
    '~test/(.*)': ['<rootDir>/__tests__/$1'],
    '~/(.*)': ['<rootDir>/$1']
  }
}
