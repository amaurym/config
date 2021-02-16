[![npm](https://img.shields.io/npm/v/@amaurym/eslintrc.svg)](https://www.npmjs.com/package/@amaurym/eslintrc)
![License](https://img.shields.io/npm/l/@amaurym/eslintrc)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![dependencies Status](https://david-dm.org/amaurym/config/status.svg?path=packages/eslintrc)](https://david-dm.org/amaurym/config?path=packages/eslintrc)
[![Buy me a tree](https://img.shields.io/badge/Buy%20me%20a%20tree-%F0%9F%8C%B3-lightgreen)](https://offset.earth/amaurym)

# `@amaurym/eslintrc`

💯 Mostly common-sense configuration files for `eslint`.

## 🚀 Get Started

Install the package

```bash
yarn add --dev @amaurym/eslintrc
```

In your project's root folder:

```bash
echo "module.exports = require('@amaurym/eslintrc');" > .eslintrc.js
echo "module.exports = require('@amaurym/eslintrc/prettierrc');" > .prettierrc.js
```

And now you should be able to lint your project.

## 📖 Included Rules

The set of rules I use is the following:

-   `@typescript-eslint/recommended`: Recommended rules by the `typescript-eslint` team. See [all rules](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json).
-   `prettier`: Opiniated code formatter. See their homepage for more info https://prettier.io/.
-   `react/recommended`: Recommended rules for React, harmless if you don't use React.

I believe that Prettier is not enough, because it's only a code formatter, and doesn't check for [code quality rules](https://prettier.io/docs/en/comparison.html). This is the reason I chose to add `@typescript-eslint/recommended` on top of Prettier.
