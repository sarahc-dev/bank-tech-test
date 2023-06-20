module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        jest: true,
    },
    extends: "eslint:recommended",
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "max-lines-per-function": ["warn", { max: 9, skipBlankLines: true }],
        "max-lines": ["warn", { max: 50, skipBlankLines: true }],
        // "max-len": ["warn"],
    },
};
