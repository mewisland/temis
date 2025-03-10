/**
 * @see https://commitlint.js.org/reference/rules.html
 */
export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "subject-case": [0, "never"],
    "subject-full-stop": [0, "never"],
    "header-case": [0, "never"],
    "header-max-length": [0, "never"],
    "body-case": [0, "never"],
  },
};
