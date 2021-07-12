module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    'c@/(.*)': '<rootDir>/src/ts/components/$1'
  }
}
