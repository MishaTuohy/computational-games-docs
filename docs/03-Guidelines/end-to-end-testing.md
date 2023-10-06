---
id: end-to-end-testing
title: E2E Testing
sidebar_position: 6
---

This section provides an overview of how to configure and run end-to-end (E2E) tests using Cypress in a Next.js project.

### Configuration

The package.json file contains the necessary scripts for running E2E tests with Cypress:

```json
"scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "test": "jest",
    "test:update": "jest --updateSnapshot",
    "test:coverage": "jest --coverage --coverageReporters=\"json-summary\"",
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
}
```

The Cypress configuration is defined in the cypress.json file:

```javascript
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
```

The TypeScript configuration for Cypress tests is defined in tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

### Writing E2E Tests

An example E2E test suite for the index page using Cypress:

#### Home Page Test

```javascript
describe('Index Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('renders IntroSection with correct title', () => {
        cy.get('p').contains('Student Project: Michael Alexey Tuohy')
    })

    it('renders AimSection with correct title', () => {
        cy.get('h3').contains('Aims')
    })

    it('renders GameSection with correct title', () => {
        cy.get('h3').contains('Games')
    })

    it('renders AboutSection with correct title', () => {
        cy.get('h6').contains('Repository')
    })
})

export {}
```

### Running E2E Tests

To run E2E tests interactively, use the following command in your terminal:

```bash
npm run cy:open
```

### Interpreting Test Results

Cypress will display test results in the interactive Test Runner or the terminal (for headless mode). If any tests fail, the output will include detailed information about the failure, such as the expected and received values. You can also view screenshots and videos of the test runs to help with debugging and understanding the test execution.