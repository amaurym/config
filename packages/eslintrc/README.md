# `@amaurymartiny/eslintrc`

A mostly common-sense configuration for eslintrc.

## Get Started

Install the package

```bash
yarn add --dev @amaurymartiny/eslintrc
```

In your projects root folder:

```bash
echo "module.exports = require('@amaurymartiny/eslintrc');" > .eslintrc.js
echo "module.exports = require('@amaurymartiny/eslintrc/prettierrc');" > .prettierrc.js
```

And now you should be able to lint your project.

## Included Rules

The set of rules I use is the following:

- `@typescript-eslint/recommended`: Recommended rules by the `typescript-eslint` team. See [all rules](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended.json).
- `prettier`: Opiniated code formatter. See their homepage for more info https://prettier.io/.
- `react/recommended`: Recommended rules for React, harmless if you don't use React.

I believe that Prettier is not enough, because it's only a code formatter, and doesn't check for [code quality rules](https://prettier.io/docs/en/comparison.html). This is the reason I chose to add `@typescript-eslint/recommended` on top of Prettier.
