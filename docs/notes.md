# Some notes about project structure

## Aliases
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

