# `@amaurymartiny/tsconfig`

A mostly common-sense configuration for tsconfig.

## Get Started

In your projects root folder:

```bash
yarn add --dev @amaurymartiny/tsconfig
```

And in your own `tsconfig.json`, add:

```json
{
  "extends": "./node_modules/@amaurymartiny/tsconfig/tsconfig"
}
```

## Included Rules

The only rule that I use is the following:

```json
{
  "compilerOptions": {
    "strict": true
  }
}
```
