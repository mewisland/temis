# temis ⚖️

[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

![](./assets/temis.webp)

_"My hesitation may one day become someone else’s answer.”_

## Overview

Temis is a package that centralizes the configuration for various development tools, making TypeScript and React development easier and more efficient.

## Motivation

A package that keeps all the settings for great tools in one place, making my TypeScript React development much easier and better, just for me.

## Features

- **Centralized Configuration**: Manage settings for multiple development tools in one place.
- **Simplifies Development**: Streamline TypeScript and React development with pre-configured settings.
- **Regular Updates**: Continuously updated for personal learning and improvement.

## Support Tools

- [Biome](https://github.com/biomejs/biome) v1.9.4
- [commitlint](https://github.com/conventional-changelog/commitlint) v19.8.0

## Installation

> [!WARNING]
> This project is also maintained regularly for personal learning purposes. It may change without notice, and we cannot guarantee any compensation.

```shell
# npm
npm install --save-dev temis

# yarn
yarn add --dev temis

# pnpm
pnpm add --save-dev temis
```

## Usage

### Biome

```jsonc
// biome.json
{
  "extends": ["./node_modules/temis/configs/biome/biome.json"],
}
```

If you find the rules too strict, please override the settings.

### commitlint

```mjs
// commitlint.config.mjs
export default {
  extends: ["./configs/commitlint/commitlint.config.mjs"],
};
```

If you find the rules too strict, please override the settings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Memo

### Policy

- For language specifications, we will complement it in a form that does not omit anything that can be omitted.

### Code Style

- Biome's `javascript.formatter.arrowParentheses` is set to `"always"`.
- Biome's `javascript.formatter.quoteProperties` is set to `"asNeeded"`.
- Biome's `javascript.formatter.semicolons` is set to `"always"`.
- Biome's `javascript.formatter.trailingCommas` is set to `"all"`.
- Biome's `javascript.formatter.indentStyle` is set to `"space"`.
- Biome's `javascript.formatter.indentWidth` is set to `2`.
- Biome's `organizeImports` is not used. Instead, sorting is done with ESLint.

### Commit Message Style

- Follow Conventional Commits
- Relax the rules regarding the number of characters
