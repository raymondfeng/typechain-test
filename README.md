# TypeChain test

This repo is used to reproduce https://github.com/dethcrypto/TypeChain/issues/722.

## To reproduce

```sh
npm i
npm run build:package
```

We expect `src/types` to be created with generated TypeScript files but it does not happen.