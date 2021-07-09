# Some notes about project structure

## Aliases (with example)
**jest.config.js**
```js
module.exports = {
  moduleNameMapper: {
    'cmp@/(.*)': '<rootDir>/src/components/$1'
  }
}
```

**tsconfig.json**
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": [
        "src/*"
      ],
      "cmp@/*": [
        "src/components/*"
      ]
    }
  }
}
```

**vue.config.js**
```js
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.vue'],
      alias: {
        'cmp@': path.join(__dirname, 'src/components/')
      }
    }
  }
}
```
