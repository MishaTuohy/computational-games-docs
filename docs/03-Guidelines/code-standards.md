---
id: code-standards
title: Code Standards
sidebar_position: 1
---

This section outlines the coding standards, style guides, and best practices followed in the project. To ensure consistency and maintainability, we use linters, formatters, and other tools to enforce these standards.

## ESLint

We use [ESLint](https://eslint.org/) as the primary tool to enforce coding standards and best practices. The ESLint configuration file, `.eslintrc.json`, specifies the rules and settings for the project:

```json
{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@next/next/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@next/next"
  ],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "indent": ["error", 4],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/no-unknown-property": "off",
    "react/display-name": "off",
    "@next/next/no-img-element": "off"
  },
  "settings": {
    "react": {
      "version": "18.2.0"
    }
  }
}

```
## Key Rules

- semi: Enforces the use of semicolons at the end of statements.
- quotes: Enforces the use of single quotes for strings.
- indent: Enforces an indentation of 4 spaces.
- react/react-in-jsx-scope: Disables the requirement to import React in every file that uses JSX.
- react/prop-types: Disables prop-types validation, as it is not required when using TypeScript.
- react/no-unknown-property: Disables the check for unknown HTML properties, allowing for custom attributes.
- react/display-name: Disables the requirement to define a displayName for React components.
- @next/next/no-img-element: Disables the requirement to use Next.js Image component instead of the HTML img element.

## Code Formatting
We use Prettier as the code formatter for the project. It helps maintain a consistent code style across the entire codebase. Prettier can be integrated with ESLint to automatically format the code based on the ESLint rules.

To enforce a consistent coding style, we recommend using an editor that supports ESLint and Prettier integration, such as Visual Studio Code or JetBrains WebStorm.

By following these coding standards and conventions, we ensure that our code is consistent, maintainable, and easy to understand.