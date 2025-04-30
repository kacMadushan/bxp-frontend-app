module.export = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint//recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:tailwindcss/recommended"
    ],
    plugins: [
        "@typescript-eslint",
        "react",
        "react-hooks",
        "jsx-a11y",
        "simple-import-sort",
        "tailwindcss"
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "warn",
        "tailwindcss/classnames-order": "warn",
        "tailwindcss/no-custom-classname": "warn",
    },
    settings: {
        react: {
            version: "detect"
        },
        tailwindcss: {
            config: "./tailwind.config.js"
        }
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020
    }
}

