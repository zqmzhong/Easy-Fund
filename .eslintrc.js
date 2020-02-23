module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:json/recommended",
        "plugin:vue/recommended",
        "@vue/airbnb",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        indent: ["error", 4],
        quotes: ["error", "double", { avoidEscape: true }],
        "linebreak-style": "off",
        "max-len": ["error", {
            code: 150,
            ignoreTrailingComments: true,
            ignoreStrings: true,
        }],
        "vue/html-indent": ["warn", 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: [],
        }],
    },
    plugins: [
        "json",
    ],
    parserOptions: {
        parser: "babel-eslint",
    },
};
