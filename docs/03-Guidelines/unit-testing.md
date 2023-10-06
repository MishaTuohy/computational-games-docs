---
id: unit-testing
title: Unit Testing
sidebar_position: 5
---

### Configuration

The Jest configuration is defined in the `jest.config.js` file, which utilizes the `next-jest` package for Next.js compatibility. Custom configurations, such as test environment and coverage thresholds, are merged with the base configuration.

```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({ 
    dir: './' 
});

const customJestConfig = {
    // ... custom configurations ...
};

module.exports = createJestConfig(customJestConfig);
```

The `package.json` file contains the necessary scripts for running tests and generating coverage reports:

```json
"scripts": {
    "test": "jest",
    "test:update": "jest --updateSnapshot",
    "test:coverage": "jest --coverage --coverageReporters=\"json-summary\""
}
```

### Writing Unit Tests

In this subsection, we will look at an example test case using the AimSection component. The test ensures that the component is rendered with the correct data.

#### AimSection Test

The AimSection test checks if the component is rendered with the correct title, description, and aims data.

```javascript
describe('AimSection', () => {
    const text = textConfig.PAGES.HOME.AIM;

    it('renders the component with the correct data', () => {
        const { getByText } = render(<AimSection />);
        expect(getByText(text.TITLE)).toBeInTheDocument();
        expect(getByText(text.DESC)).toBeInTheDocument();
        text.AIMS.forEach((aim) => {
            expect(getByText(aim.title)).toBeInTheDocument();
            expect(getByText(aim.desc)).toBeInTheDocument();
        });
    });
});
```

By writing tests like this one, you can ensure that your components are rendered correctly with the expected data, and that any changes to the component's code will not cause unwanted behavior.

### Running Tests

To run tests, execute the following command in your terminal:

```bash
npm run test
```

To update snapshots, run:

```bash
npm run test:update
```

To generate a coverage report, run:

```bash
npm run test:coverage
```

### Interpreting Test Results

Jest will display test results in the terminal. If any tests fail, the output will include detailed information about the failure, such as the expected and received values. The coverage report will show the percentage of code covered by tests, and highlight areas where the coverage is below the threshold defined in the \`jest.config.js\` file.