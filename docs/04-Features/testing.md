---
id: testing
title: Testing
sidebar_position: 7
---

The application has a robust testing strategy in place, which includes manual, unit, and end-to-end (E2E) testing(configured), ensuring that the application functions correctly and is free of bugs. This helps to maintain code quality, identify issues early, and improve overall application stability.

## Types of Testing

### Manual Testing
Developers can perform manual testing to ensure that the application is functioning correctly from the user's perspective. This involves interacting with the application as an end user would, by clicking buttons, entering text, and navigating through the app. Manual testing is useful for detecting visual issues and validating user interactions but can be time-consuming and error-prone.

### Unit Testing
Unit tests are implemented using the Jest testing framework, which helps to ensure that individual components and functions are working as expected. Unit tests are important for validating the functionality of small, isolated pieces of code and are typically faster and more reliable than manual testing.

To create unit tests, you can use the `describe` and `it` functions provided by Jest. The `describe` function is used to group related tests, while the `it` function is used to define and execute individual test cases. You can use various Jest assertions, such as `toBe`, `toEqual`, `expect` and `toHaveLength`, to validate the output of your functions and components.

```javascript
// Example test for getGame from GameService
describe('getGame', () => {
    it('should call getDoc with the correct arguments', async () => {
        const id = 'game123';
        await getGame(id);
        expect(getDoc).toHaveBeenCalledWith('gameSessions', id);
    });
});
```

### End-to-End (E2E) Testing
Although the application is configured to support E2E testing, no E2E tests currently exist. E2E tests are valuable for verifying that the application works as a whole, simulating user interactions across multiple components and systems. These tests can help to identify issues that may not be detected through unit testing alone, as they evaluate the complete user journey.

These tools allow you to write tests that simulate user actions, such as clicking buttons, filling out forms, and navigating between pages, ensuring that the application functions as expected in a real-world context.

```javascript
// Example using the Cypress testing framework
describe('Login page', () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit('/login');
  });

  it('Allows the user to log in', () => {
    // Enter the email and password into the form
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('password{enter}');

    // Check that the user is redirected to the home page
    cy.url().should('include', '/home');
  });
});
```

In summary, the application employs a combination of manual, unit, and E2E testing to ensure its reliability and stability. This robust testing strategy helps to maintain code quality, identify issues early, and improve overall application performance.

