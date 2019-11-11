[![Actions Status](https://github.com/amaurymartiny/config/workflows/pr/badge.svg)](https://github.com/amaurymartiny/config/actions)
[![npm](https://img.shields.io/npm/v/@amaurymartiny/config.svg)](https://www.npmjs.com/package/@amaurymartiny/config)
![License](https://img.shields.io/npm/l/@amaurymartiny/config)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies Status](https://david-dm.org/amaurymartiny/config/status.svg?path=packages/config)](https://david-dm.org/amaurymartiny/config?path=packages/config)
[![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/amaurymartiny)

<br /><br /><br />

<h1 align="center"><code>@amaurymartiny/config</code></h1>
<h4 align="center">💯 Mostly common-sense configuration files for `eslint` and `tsconfig`.
</h4>

<br /><br /><br />

[`@amaurymartiny/config`](#-packages) serves as bundle package for the following smaller packages:

- [`@amaurymartiny/eslintrc`](#-packages)
- [`@amaurymartiny/tsconfig`](#-packages)

So you can either add `@amaurymartiny/config` as a whole, or you can install the smaller parts individually. Since you are adding these packages as `devDependencies`, it should not add any overhead to your final bundle size.

## 🚀 Get Started

Install the package:

```bash
yarn add --dev @amaurymartiny/config
```

And follow the Get Started guides of the following configs.

## 📦 Packages

| Package                                                                                            | npm                                                                                                                       | Description                                                                        | Docs                                                                             |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [`@amaurymartiny/config`](https://github.com/amaurymartiny/config/tree/master/packages/config)     | [![npm](https://img.shields.io/npm/v/@amaurymartiny/config.svg)](https://www.npmjs.com/package/@amaurymartiny/config)     | Bundle package for all the packages below                                          | This current README                                                              |
| [`@amaurymartiny/eslintrc`](https://github.com/amaurymartiny/config/tree/master/packages/eslintrc) | [![npm](https://img.shields.io/npm/v/@amaurymartiny/eslintrc.svg)](https://www.npmjs.com/package/@amaurymartiny/eslintrc) | Config files for `eslint`. Basically `@typescript-eslint/recommended` + `prettier` | [README](https://github.com/amaurymartiny/config/tree/master/packages/eslintrc/) |
| [`@amaurymartiny/tsconfig`](https://github.com/amaurymartiny/config/tree/master/packages/tsconfig) | [![npm](https://img.shields.io/npm/v/@amaurymartiny/tsconfig.svg)](https://www.npmjs.com/package/@amaurymartiny/tsconfig) | Config files for `tsconfig`, with `--strict`                                       | [README](https://github.com/amaurymartiny/config/tree/master/packages/tsconfig/) |

## 🤔 Why?

I create a lot of [open-source projects](https://github.com/sponsors/amaurymartiny), and I like to factorize as much code/config as I can. In order to have a consistent coding style between all projects, I created this repo.

I also believe that these configs are mostly common-sense configs, so I hope you find them useful too.
