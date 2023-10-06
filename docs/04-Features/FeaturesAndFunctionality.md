---
id: features-functionality
title: Features and Functionality
sidebar_position: 1
---

# Features and Functionality
This section provides an overview of the main features and functionalities of the Computational Thinking App. It explains how they work and how they interact with each other. The app comprises various components, such as the user interface, game creation tools, and other essential aspects. Subsequent pages will go into depth as to how they work.

## User Interface
The [user interface](./user-interface) of the application is designed to be responsive, clean, and easy to navigate. It is built using React, a popular JavaScript library for building user interfaces, and styled using Bootstrap and React-Bootstrap. The main components of the user interface include:

- **Nextjs**: [Next.js](https://nextjs.org/) is a powerful React framework that enables server-rendering and static site generation, making it easier to build fast, scalable, and SEO-friendly web applications. It simplifies the development process by handling routing, code splitting, and more.
- **React**: [React](https://reactjs.org/) is a popular JavaScript library for building user interfaces. It utilizes a component-based architecture, allowing developers to create reusable components that can manage their own state and handle events.
- **Bootstrap/CSS-Modules**: [Bootstrap](https://getbootstrap.com/) is a widely used CSS framework that provides prebuilt UI components, responsive layouts, and styling utilities. In this project, Bootstrap is combined with CSS Modules, which allow for scoped CSS, making it easier to maintain and avoid styles leaking to other components. [React-Bootstrap](https://react-bootstrap.github.io/) is also used, which provides Bootstrap components as React components for seamless integration.
- **Layout**: The BaseLayout component serves as a wrapper for the application's main components, including the Header, Footer, and the content passed as props.children. It also sets up the `<Head>` component, which contains the page's metadata and title. This layout ensures consistency across the application and simplifies the process of adding new pages.
- **TextConfig**: The TextConfig object contains the text content and configurations for various parts of the application. It is organized into PAGES and COMMON sections, which hold page-specific and shared content, respectively. Using a separate configuration object makes it easier to manage and update the application's text content.

## Authentication and Authorization
The Computational Thinking App includes a robust authentication and authorization system, enabling users to create accounts, log in, and access their personalized content and settings. This system is built using Firebase Authentication, which provides a secure and scalable solution for managing user accounts and credentials.

- **FirebaseAuth**: FirebaseAuth is a secure and easy-to-use service provided by Firebase that handles user authentication. It supports a variety of authentication methods, such as email and password, social media logins, and anonymous authentication. In the Computational Thinking App, FirebaseAuth is used to enable users to log in anonymously or with their preferred authentication method.
- **AuthProvider**: The `AuthProvider` component is a React context provider that wraps the entire application, making the authentication state and functions accessible to all components. It utilizes the AuthService to manage user authentication, including logging in, logging out, and subscribing to authentication state changes. The useAuth custom hook is provided for components to easily access the authentication context. This approach centralizes the authentication logic, making it easier to manage and update throughout the application.

## Game Creation Tools
The Computational Thinking App enables developers to create their own games using pre-built tools and services provided by the software. The system includes a modular game creation framework, allowing developers to build games with their own mechanics by combining and extending the provided components. Example components include:

- **Game Service**: Offers methods for interacting with game sessions, such as joining, leaving, initializing, and updating game states. The functions provided include `getGame`, `updateParticipants`, `updateGameState`, `initialiseGame`, `joinGame`, `deleteGame`, and `removeParticipant`.
- **Game Factory**: Handles the creation of game instances and game session management. The `createGame` and `createGameInstance` functions are responsible for creating new game instances based on the game type provided.
- **Game Page Factory**: Manages the creation and rendering of game pages based on the game type and ID. The `createGamePage` function generates the appropriate React component for the specified game type and passes the game ID as a prop.
- **Pre-built Custom Hooks:** The framework includes a set of pre-built custom hooks that simplify managing game components and interactions, such as debouncing values, updating game states, handling exit actions, and initializing games.

## Data Management
The application uses Firebase, a real-time NoSQL database, for data storage and management, ensuring seamless data synchronization between clients and the server for up-to-date information access.

- **Cloud-Functions**: Firebase functions are used to create serverless back-end services, enabling scalable and efficient data handling.
- **Expressjs**: The application utilizes Express.js to create an API for handling various game session operations, such as CRUD actions on game sessions.
- **Express-Validation**: Express-validator is employed to validate incoming data from API requests, ensuring data consistency and accuracy.
- **CORS**: The application implements CORS to control and restrict access to the API, allowing only whitelisted origins to interact with the back-end services.
- **ApiService/ApiClient**: The API services, located in the services/api directory of the client-side app, provide a centralized interface for interacting with the back-end API. The `handleRequest` function handles HTTP requests, while additional functions such as `getCollection`, `getDoc`, `createDoc`, `deleteDoc`, and `updateDoc` simplify CRUD operations on collections and documents. These functions use the `whatwg-fetch` package to ensure cross-browser compatibility and employ error handling to manage potential issues during API interactions.

## Error Handling

The application implements an effective error handling strategy, which includes a generic error handling function and an ErrorBoundary component for React. This ensures a smooth user experience and maintains system stability in the event of unexpected issues.

- **errorHandler**: The `errorHandler` function is a generic error handling utility that logs errors and their context to the console. It also provides an optional `displayMessage` parameter to show an alert to the user when needed. This ensures that errors are logged for debugging purposes while also allowing for custom user-facing error messages when appropriate.
- **ErrorBoundary**: The `ErrorBoundary` component is a React error boundary that wraps the application components to catch JavaScript errors anywhere in the component tree. It prevents the entire app from crashing and provides a way to log error information. When an error is caught, it sets the `hasError` state to true and, if the router is available, navigates the user back to the homepage. The `ErrorBoundary` component is used in the `App` component, which wraps the main content of the application, ensuring that all child components are protected by the error boundary.

## Testing
The application has a robust testing strategy in place, which includes manual, unit, and end-to-end (E2E) testing, ensuring that the application functions correctly and is free of bugs. This helps to maintain code quality, identify issues early, and improve overall application stability.

- **Manual**: Developers can perform manual testing to ensure that the application is functioning correctly from the user's perspective. This involves interacting with the application as an end user would, by clicking buttons, entering text, and navigating through the app. Manual testing is useful for detecting visual issues and validating user interactions but can be time-consuming and error-prone.
- **Unit**: Unit tests are implemented using the Jest testing framework, which helps to ensure that individual components and functions are working as expected. Unit tests are important for validating the functionality of small, isolated pieces of code and are typically faster and more reliable than manual testing.
- **E2E**: Although the application is configured to support E2E testing, no E2E tests currently exist. E2E tests are valuable for verifying that the application works as a whole, simulating user interactions across multiple components and systems. These tests can help to identify issues that may not be detected through unit testing alone, as they evaluate the complete user journey.

## CI/CD Pipeline
The project utilizes a GitLab CI/CD pipeline with a custom configuration file to automate the build, test, and deploy processes. This helps maintain high code quality and security standards while enabling rapid delivery of new features and bug fixes.

- **Build**: The build stage installs the required dependencies and builds the application. Using the Node.js image, it runs `npm ci` to install dependencies in a clean state and then runs `npm run build` to build the application. Artifacts generated in this stage, including `node_modules`, are stored for use in subsequent stages.
- **Test**: In the test stage, the pipeline runs two jobs: `lint-hosting` and `test-hosting`. The `lint-hosting` job runs ESLint with the `npm run lint:fix` command, checking for and automatically fixing any code style issues. The `test-hosting` job runs the Jest test suite with `npm run test` and performs an `npm audit` to check for high-level vulnerabilities in the dependencies.
- **Deploy**: The deploy stage consists of two jobs: `deploy-functions` and `deploy-hosting`. These jobs are only executed if the changes are made to the default branch. The deploy-functions job deploys any changes made to the Firebase Functions using the firebase deploy --only functions command. The deploy-hosting job deploys the application's hosting.

By understanding the main features and functionalities of the Computational Thinking App, developers can better comprehend the application's structure and interactions, enabling them to contribute more effectively to the project.