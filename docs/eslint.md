## Usage

### eslint.config.js

```js
import { defineConfig } from "eslint/config";

import temisConfigs from "temis/eslint";

export default defineConfig(temisConfigs);
```

### tsconfig.json

```jsonc
{
  "compilerOptions": {
    // ...
    "plugins": [
      // ...
      {
        "name": "eslint-plugin-import-access"
      }
    ]
  }
}
```

## Support Plugins

| package                                                                                       | version     |
| --------------------------------------------------------------------------------------------- | ----------- |
| @eslint/css                                                                                   | v0.7.0      |
| @eslint/js                                                                                    | v9.25.1     |
| @eslint/json                                                                                  | v0.12.0     |
| @eslint/markdown                                                                              | v6.4.0      |
| @stylistic/eslint-plugin                                                                      | v4.2.0      |
| [@next/eslint-plugin-next](https://nextjs.org/docs/app/api-reference/config/eslint)           | v15.3.2     |
| @vitest/eslint-plugin                                                                         | v1.1.43     |
| eslint                                                                                        | v9.25.1     |
| eslint-plugin-boundaries                                                                      | v5.0.1      |
| eslint-plugin-import                                                                          | v2.31.0     |
| [eslint-plugin-import-access](https://github.com/uhyo/eslint-plugin-import-access)            | v3.0.0      |
| eslint-plugin-jsdoc                                                                           | v50.6.9     |
| eslint-plugin-jsx-a11y                                                                        | v6.10.2     |
| [eslint-plugin-perfectionist](https://perfectionist.dev)                                      | v4.12.3     |
| [eslint-plugin-playwright](https://github.com/playwright-community/eslint-plugin-playwright/) | v2.2.0      |
| eslint-plugin-react                                                                           | v7.37.5     |
| eslint-plugin-react-hooks                                                                     | v6.0.0-rc.1 |
| eslint-plugin-sonarjs                                                                         | v3.0.2      |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                | v59.0.1     |
| typescript-eslint                                                                             | v8.31.0     |

## Policy

### playwright (eslint-plugin-playwright)

- 適用ファイル: `**/*.e2e.test.{js,mjs,cjs,ts,jsx,tsx}`
- 推奨設定: `playwright.configs["flat/recommended"]` をベースに、以下のルールを明示的に有効化しています。

| ルール名                                      | 設定値   | 説明                                                         |
| --------------------------------------------- | -------- | ------------------------------------------------------------ |
| playwright/no-commented-out-tests             | error    | コメントアウトされたテストを禁止                              |
| playwright/no-get-by-title                    | error    | `getByTitle` の使用を禁止                                     |
| playwright/no-hooks                           | error    | フックの使用を禁止                                            |
| playwright/no-nth-methods                     | error    | `nth` 系メソッドの使用を禁止                                  |
| playwright/no-raw-locators                    | error    | 生のロケーターの使用を禁止                                    |
| playwright/no-restricted-matchers             | error    | 禁止されたマッチャーの使用を禁止                              |
| playwright/no-slowed-tests                    | error    | 遅延テストの禁止                                              |
| playwright/prefer-equality-matchers           | error    | 等価性マッチャーの使用を推奨                                  |
| playwright/prefer-hooks-in-order              | error    | フックの順序を推奨                                            |
| playwright/prefer-locators                    | error    | ロケーターの使用を推奨                                        |
| playwright/prefer-native-locators             | error    | ネイティブロケーターの使用を推奨                              |
| playwright/prefer-strict-equal                | error    | 厳密等価マッチャーの使用を推奨                                |
| playwright/prefer-to-be                       | error    | `toBe` の使用を推奨                                           |
| playwright/prefer-to-contain                  | error    | `toContain` の使用を推奨                                      |
| playwright/prefer-to-have-count               | error    | `toHaveCount` の使用を推奨                                    |
| playwright/prefer-to-have-length              | error    | `toHaveLength` の使用を推奨                                   |
| playwright/require-hook                       | error    | 必要なフックの使用を強制                                      |
| playwright/require-to-throw-message           | error    | `toThrow` にはメッセージ指定を強制                            |
| playwright/require-top-level-describe         | error    | ファイルのトップレベルで `describe` を強制                    |
