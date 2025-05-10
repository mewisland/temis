import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";
import jsdoc from "eslint-plugin-jsdoc";
import pluginImport from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";
import pluginSonar from "eslint-plugin-sonarjs";
import pluginNext from "@next/eslint-plugin-next";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginUnicorn from "eslint-plugin-unicorn";
import vitest from "@vitest/eslint-plugin";
import pluginBoundaries from "eslint-plugin-boundaries";

export default defineConfig([
  {
    name: "global/ignores",
    ignores: [
      ".next/**/*",
      "dist/**/*",
      "node_modules/**/*",
      "out/**/*",
      "public/**/*",
    ],
  },
  {
    name: "global/globals",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    name: "boundaries",
    settings: {
      "boundaries/elements": [
        { type: "shared", pattern: "src/shared/*" },
        { type: "entities", pattern: "src/entities/*" },
        { type: "features", pattern: "src/features/*" },
        { type: "widgets", pattern: "src/widgets/*" },
        { type: "pages", pattern: "src/pages/*" },
        { type: "processes", pattern: "src/processes/*" },
        { type: "app", pattern: "src/app" },
      ],
    },
    plugins: {
      boundaries: pluginBoundaries,
    },
    rules: {
      ...pluginBoundaries.configs.recommended.rules,
      "boundaries/element-types": [
        "error",
        {
          default: "disallow",
          rules: [
            { from: ["features"], allow: ["entities", "shared"] },
            { from: ["entities"], allow: ["shared"] },
            { from: ["widgets"], allow: ["features", "entities", "shared"] },
            {
              from: ["pages"],
              allow: ["widgets", "features", "entities", "shared"],
            },
            {
              from: ["processes"],
              allow: ["pages", "widgets", "features", "entities", "shared"],
            },
            {
              from: ["app"],
              allow: [
                "processes",
                "pages",
                "widgets",
                "features",
                "entities",
                "shared",
              ],
            },
          ],
        },
      ],
    },
  },
  {
    name: "eslint",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    rules: {
      "arrow-body-style": ["error", "always"],
      curly: ["error", "all"],
      "no-implicit-coercion": "error",
      "prefer-template": "error",
      "require-await": "error",
    },
  },
  {
    name: "typescript-eslint",
    extends: [
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-return": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/naming-convention": [
        "warn",
        {
          selector: "variable",
          format: ["camelCase"],
          regex:
            "^(?!data$|info$|value$|temp$|obj$|thing$|stuff$|item$|flag$|obj\\d*|data\\d*|tmp\\d*).+$",
          match: true,
        },
      ],
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
  },
  {
    name: "unicorn",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ...pluginUnicorn.configs.recommended,
  },
  {
    name: "jsdoc",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    extends: [jsdoc.configs["flat/recommended-typescript-error"]],
    rules: {
      "jsdoc/check-tag-names": [
        "error",
        {
          definedTags: [
            "abstract",
            "alpha",
            "augments",
            "author",
            "beta",
            "callback",
            "category",
            "categoryDescription",
            "class",
            "default",
            "defaultValue",
            "deprecated",
            "disableGroups",
            "document",
            "enum",
            "event",
            "eventProperty",
            "example",
            "expand",
            "expandType",
            "experimental",
            "extends",
            "function",
            "group",
            "groupDescription",
            "hidden",
            "hideCategories",
            "hideconstructor",
            "hideGroups",
            "ignore",
            "import",
            "include",
            "includeCode",
            "inheritDoc",
            "inline",
            "inlineType",
            "interface",
            "internal",
            "jsx",
            "label",
            "license",
            "link",
            "linkcode",
            "linkplain",
            "mergeModuleWith",
            "module",
            "namespace",
            "overload",
            "override",
            "packageDocumentation",
            "param",
            "preventExpand",
            "preventInline",
            "primaryExport",
            "private",
            "privateRemarks",
            "prop",
            "property",
            "protected",
            "public",
            "readonly",
            "remarks",
            "return",
            "returns",
            "satisfies",
            "sealed",
            "see",
            "showCategories",
            "showGroups",
            "since",
            "summary",
            "template",
            "throws",
            "type",
            "typedef",
            "typeParam",
            "useDeclaredType",
            "virtual",
            "yields",
          ],
        },
      ],
      "jsdoc/require-description": ["off"],
      "jsdoc/require-jsdoc": ["off"],
      "jsdoc/require-param": ["off"],
      "jsdoc/require-returns": ["off"],
      "jsdoc/sort-tags": [
        "error",
        {
          reportIntraTagGroupSpacing: false,
        },
      ],
      "jsdoc/tag-lines": [
        "error",
        "always",
        {
          applyToEndTag: false,
          startLines: 1,
        },
      ],
    },
  },
  {
    name: "import",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      import: pluginImport,
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/no-duplicates": "error",
    },
  },
  {
    name: "@stylistic",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/jsx-pascal-case": "error",
      "@stylistic/jsx-self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
      "@stylistic/lines-around-comment": [
        "error",
        {
          allowArrayStart: true,
          allowBlockStart: true,
          allowClassStart: true,
          allowEnumStart: true,
          allowInterfaceStart: true,
          allowModuleStart: true,
          allowObjectStart: true,
          allowTypeStart: true,
          beforeBlockComment: true,
        },
      ],
      "@stylistic/padding-line-between-statements": [
        "error",
        { blankLine: "always", next: "return", prev: "*" },
        { blankLine: "always", next: "*", prev: ["const", "let", "var"] },
        {
          blankLine: "any",
          next: ["const", "let", "var"],
          prev: ["const", "let", "var"],
        },
        { blankLine: "always", next: "*", prev: "directive" },
        { blankLine: "any", next: "directive", prev: "directive" },
        { blankLine: "always", next: "*", prev: ["case", "default"] },
        { blankLine: "always", next: "*", prev: "multiline-block-like" },
      ],
      "@stylistic/spaced-comment": ["error", "always"],
    },
  },
  {
    name: "sonarjs",
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    extends: [pluginSonar.configs.recommended],
  },
  {
    name: "react",
    files: ["**/*.{jsx,tsx}"],
    settings: {
      react: {
        version: "detect",
      },
    },
    extends: [
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat["jsx-runtime"],
      pluginReactHooks.configs.recommended,
    ],
    rules: {
      "react/destructuring-assignment": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      "react/hook-use-state": "error",
      "react/jsx-boolean-value": ["error", "always"],
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-fragments": "error",
      "react/jsx-no-bind": "error",
      "react/jsx-no-leaked-render": "error",
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-sort-props": "off",
      "react/no-danger": "warn",
      "react/prop-types": "off",
      "react/self-closing-comp": "error",
      "react-hooks/exhaustive-deps": "error",
    },
  },
  {
    name: "jsx-a11y",
    files: ["**/*.{jsx,tsx}"],
    extends: [pluginJsxA11y.flatConfigs.recommended],
  },
  {
    name: "Next.js",
    files: ["**/*.{jsx,tsx}"],
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    name: "vitest",
    files: ["**/*.spec.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      vitest: {
        typecheck: true,
      },
    },
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    plugins: {
      vitest,
    },
    rules: {
      ...vitest.configs.all.rules,
      "vitest/no-done-callback": "off",
    },
  },
  {
    name: "@eslint/json/JSON",
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
  {
    name: "@eslint/json/JSONC",
    files: ["**/*.jsonc"],
    plugins: { json },
    language: "json/jsonc",
    extends: ["json/recommended"],
  },
  {
    name: "@eslint/json/JSON5",
    files: ["**/*.json5"],
    plugins: { json },
    language: "json/json5",
    extends: ["json/recommended"],
  },
  {
    name: "@eslint/markdown",
    files: ["**/*.md"],
    plugins: { markdown },
    language: "markdown/gfm",
    extends: ["markdown/recommended"],
  },
  {
    name: "@eslint/css",
    files: ["**/*.css"],
    plugins: { css },
    language: "css/css",
    extends: ["css/recommended"],
  },
]);
