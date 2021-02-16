[![npm](https://img.shields.io/npm/v/@amaurym/tsconfig.svg)](https://www.npmjs.com/package/@amaurym/tsconfig)
![License](https://img.shields.io/npm/l/@amaurym/tsconfig)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies Status](https://david-dm.org/amaurym/config/status.svg?path=packages/tsconfig)](https://david-dm.org/amaurym/config?path=packages/tsconfig)
[![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/amaurym)

# `@amaurym/tsconfig`

💯 Mostly common-sense configuration files for `tsconfig`.

## 🚀 Get Started

In your project's root folder:

```bash
yarn add --dev @amaurym/tsconfig
```

And in your own `tsconfig.json`, add:

```json
{
  "extends": "./node_modules/@amaurym/tsconfig/tsconfig"
}
```

## 📖 Included Rules

I try to use as much defaults from the TypeScript team as possible, but I find `--strict` to be really useful to have elegant code.

```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "strict": true
  }
}
```
