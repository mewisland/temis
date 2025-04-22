## Usage

```mjs
// commitlint.config.mjs
export default {
  extends: ["node_modules/temis/configs/commitlint/commitlint.config.mjs"],
};
```

If you find the rules too strict, please override the settings.

## Policy

I use [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) because I align with the philosophy of Conventional Commits. However, to encourage a more relaxed writing style, I have loosened rules related to character limits and casing.

Please update the scope-enum as needed to reflect the conventions of this project. Example:

```mjs
export default {
  extends: ["node_modules/temis/configs/commitlint/commitlint.config.mjs"],
  "scope-enum": [
    2,
    "always",
    ["app", "pages", "widgets", "features", "entities", "shared"],
  ],
};
```

If you have configured `scope-enum`, it might be a good idea to use it together with a [Conventional Commits extension for VSCode](https://github.com/vivaxy/vscode-conventional-commits).
