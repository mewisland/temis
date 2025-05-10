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

| package                                                                             | version     |
| ----------------------------------------------------------------------------------- | ----------- |
| @eslint/css                                                                         | v0.7.0      |
| @eslint/js                                                                          | v9.25.1     |
| @eslint/json                                                                        | v0.12.0     |
| @eslint/markdown                                                                    | v6.4.0      |
| @stylistic/eslint-plugin                                                            | v4.2.0      |
| [@next/eslint-plugin-next](https://nextjs.org/docs/app/api-reference/config/eslint) | v15.3.2     |
| @vitest/eslint-plugin                                                               | v1.1.43     |
| eslint                                                                              | v9.25.1     |
| eslint-plugin-boundaries                                                            | v5.0.1      |
| eslint-plugin-import                                                                | v2.31.0     |
| [eslint-plugin-import-access](https://github.com/uhyo/eslint-plugin-import-access)  | v2.2.0      |
| eslint-plugin-jsdoc                                                                 | v50.6.9     |
| eslint-plugin-jsx-a11y                                                              | v6.10.2     |
| [eslint-plugin-perfectionist](https://perfectionist.dev)                            | v4.12.3     |
| eslint-plugin-react                                                                 | v7.37.5     |
| eslint-plugin-react-hooks                                                           | v6.0.0-rc.1 |
| eslint-plugin-sonarjs                                                               | v3.0.2      |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)      | v59.0.1     |
| typescript-eslint                                                                   | v8.31.0     |

## Policy

*Working on it...*
