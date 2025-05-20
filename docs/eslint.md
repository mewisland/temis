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

### boundaries (eslint-plugin-boundaries)

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 推奨設定: `pluginBoundaries.configs.recommended.rules` をベースに、`boundaries/element-types` を明示的に設定。

| ルール名                      | 設定値 | 説明                                                                                       |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| boundaries/element-types      | `error`  | レイヤー間の依存関係を制限。各要素タイプごとに許可される依存先を細かく制御                 |

### perfectionist (eslint-plugin-perfectionist)

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 推奨設定: `perfectionist.configs["recommended-natural"]` をベースに、`perfectionist/sort-imports` を明示的に設定。

| ルール名                      | 設定値 | 説明                                                                                       |
| ----------------------------- | ------ | ------------------------------------------------------------------------------------------ |
| perfectionist/sort-imports    | `error` | import文を自然順（asc）でソート                                                            |

### eslint（コアESLintルール）

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 推奨設定: `js/recommended` をベースに、以下のルールを明示的に有効化。

| ルール名                | 設定値         | 説明                                 |
| ----------------------- | -------------- | ------------------------------------ |
| arrow-body-style        | `["error", "always"]` | アロー関数の本体を常にブロック化     |
| curly                  | `["error", "all"]`    | すべての制御構文で波括弧を必須       |
| no-implicit-coercion   | `error`           | 暗黙の型変換を禁止                   |
| prefer-template        | `error`           | テンプレートリテラルの使用を推奨     |
| require-await          | `error`           | async関数内でawait必須               |

### typescript-eslint

- 適用ファイル: `**/*.{js,jsx,ts,tsx}`
- 推奨設定: `typescript-eslint` の strictTypeChecked, stylisticTypeChecked をベースに、以下のルールを明示的に有効化。

| ルール名                                    | 設定値         | 説明                                 |
| ------------------------------------------- | -------------- | ------------------------------------ |
| @typescript-eslint/consistent-return        | `error`          | return文の一貫性を強制               |
| @typescript-eslint/consistent-type-definitions | `["error", "type"]` | 型定義はtypeエイリアスを推奨         |
| @typescript-eslint/consistent-type-exports  | `error`          | 型エクスポートの一貫性を強制         |
| @typescript-eslint/consistent-type-imports  | `error`          | 型インポートの一貫性を強制           |
| @typescript-eslint/require-array-sort-compare | `error`        | Array#sortに比較関数必須             |
| @typescript-eslint/switch-exhaustiveness-check | `error`       | switch文の網羅性を強制               |

### unicorn (eslint-plugin-unicorn)

- 適用ファイル: `**/*.{js,mjs,cjs,ts}` および `**/*.{jsx,tsx}`
- 推奨設定: `pluginUnicorn.configs.recommended.rules` をベースに、以下のルールを明示的に変更。

| ルール名                        | 設定値 | 説明                                 |
| ------------------------------- | ------ | ------------------------------------ |
| unicorn/prevent-abbreviations   | `off`    | 省略形の禁止を無効化                 |
| unicorn/no-null                 | `off`    | nullの使用禁止を無効化（jsx/tsxのみ）|

### jsdoc (eslint-plugin-jsdoc)

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 推奨設定: `jsdoc.configs["flat/recommended-typescript-error"]` をベースに、以下のルールを明示的に有効化・変更。

| ルール名                    | 設定値 | 説明                                 |
| --------------------------- | ------ | ------------------------------------ |
| jsdoc/check-tag-names       | `error`  | 定義済みタグのみ許可                 |
| jsdoc/require-description   | `error`  | 各種宣言に説明文必須                 |
| jsdoc/require-jsdoc         | `error`  | 公開API等にJSDoc必須                 |
| jsdoc/require-param         | `error`  | パラメータのJSDoc必須                |
| jsdoc/require-returns       | `off`    | 戻り値のJSDocは不要                  |
| jsdoc/sort-tags             | `error`  | タグの並び順を強制                   |
| jsdoc/tag-lines             | `error`  | タグ間の空行を強制                   |

### import (eslint-plugin-import)

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 明示的に有効化されているルール：

| ルール名                              | 設定値                | 説明                                 |
| ------------------------------------- | --------------------- | ------------------------------------ |
| import/consistent-type-specifier-style | `["error", "prefer-top-level"]` | 型インポートはトップレベル推奨      |
| import/no-duplicates                  | `error`                 | importの重複禁止                    |

### import-access (eslint-plugin-import-access)

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 明示的に有効化されているルール：

| ルール名              | 設定値 | 説明                                 |
| --------------------- | ------ | ------------------------------------ |
| import-access/jsdoc   | `error`  | JSDocによるアクセス制御を強制        |

### @stylistic (stylistic)

- 適用ファイル: `**/*.{js,mjs,cjs,ts,jsx,tsx}`
- 明示的に有効化されているルール：

| ルール名                              | 設定値 | 説明                                 |
| ------------------------------------- | ------ | ------------------------------------ |
| @stylistic/jsx-pascal-case            | `error`  | JSXコンポーネント名はパスカルケース  |
| @stylistic/jsx-self-closing-comp      | `error`  | JSXの自己終了タグを強制              |
| @stylistic/lines-around-comment       | `error`  | コメント前後の空行を制御             |
| @stylistic/padding-line-between-statements | `error` | ステートメント間の空行を制御         |
| @stylistic/spaced-comment             | `error`  | コメント前にスペース必須             |

### react / react-hooks

- 適用ファイル: `**/*.{jsx,tsx}`
- 推奨設定: `pluginReact.configs.flat.recommended`, `pluginReact.configs.flat["jsx-runtime"]`, `pluginReactHooks.configs.recommended` をベースに、以下のルールを明示的に有効化・変更。

| ルール名                              | 設定値                | 説明                                 |
| ------------------------------------- | --------------------- | ------------------------------------ |
| react/destructuring-assignment        | `error`                 | props/stateの分割代入を強制          |
| react/function-component-definition   | `["error", {namedComponents: "arrow-function", unnamedComponents: "arrow-function"}]` | 関数コンポーネントはアロー関数推奨 |
| react/hook-use-state                  | `error`                 | useStateの正しい使い方を強制         |
| react/jsx-boolean-value               | `["error", "always"]`  | JSXのboolean値は明示的に記述         |
| react/jsx-curly-brace-presence        | `error`                 | JSX中の波括弧の使用を制御            |
| react/jsx-fragments                   | `error`                 | フラグメントの使用を制御             |
| react/jsx-no-bind                     | `error`                 | JSX内でのbind禁止                    |
| react/jsx-no-leaked-render            | `error`                 | レンダーリークの禁止                 |
| react/jsx-no-useless-fragment         | `error`                 | 不要なフラグメントの禁止             |
| react/jsx-pascal-case                 | `error`                 | JSXコンポーネント名はパスカルケース  |
| react/jsx-sort-props                  | `off`                   | JSXのpropsソートは無効               |
| react/no-danger                       | `warn`                  | dangerouslySetInnerHTMLの警告         |
| react/prop-types                      | `off`                   | prop-typesの型チェック無効           |
| react/self-closing-comp               | `error`                 | 自己終了タグを強制                   |
| react-hooks/exhaustive-deps           | `error`                 | useEffect等の依存配列の網羅性を強制  |

### jsx-a11y (eslint-plugin-jsx-a11y)

- 適用ファイル: `**/*.{jsx,tsx}`
- 推奨設定: `pluginJsxA11y.flatConfigs.recommended` を使用。

### Next.js (@next/eslint-plugin-next)

- 適用ファイル: `**/*.{jsx,tsx}`
- 推奨設定: `pluginNext.configs.recommended.rules` および `pluginNext.configs["core-web-vitals"].rules` を使用。

### vitest (@vitest/eslint-plugin)

- 適用ファイル: `**/*.spec.{js,mjs,cjs,ts,jsx,tsx}`
- 推奨設定: `vitest.configs.all.rules` をベースに、`vitest/no-done-callback` を明示的にoff。

| ルール名                | 設定値 | 説明                                 |
| ----------------------- | ------ | ------------------------------------ |
| vitest/no-done-callback | `off`    | doneコールバックの禁止を無効化       |

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
