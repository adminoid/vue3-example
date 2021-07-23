module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    'c@/(.*)': '<rootDir>/src/ts/components/$1',
    's@/(.*)': '<rootDir>/src/ts/store/$1',
    '@/(.*)': '<rootDir>/src/$1'
  }
}
