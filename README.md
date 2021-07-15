# Alles control project

## Project setup
```shell
yarn install
```

### Compiles and hot-reloads for development
```shell
yarn serve
```

### Compiles and minifies for production
```shell
yarn build
```

### Lints and fixes files
```shell
yarn lint
```

### Running unit tests
```shell
yarn test:unit
```

## Configuration files

### Project standard configs (in root directory):
* `.browserslistrc`
* `.editorconfig`
* `.eslintrc.js`
* `.gitignore`
* `babel.config.js`
* `jest.config.js` - path aliases for testing
* `package.json`
* `tsconfig.json` - typescript path aliases
* `vue.config.js` - vue-cli path aliases

### Sass global variables (`src/sass/*`)
* `_root.sass` - global css variables
* `_variables.sass` - global project styles and twitter bootstrap rewrites

### Common ts files
* `src/ts/includes/svg.ts` - svg inline code parts
