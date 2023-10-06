---
id: introduction
title: Introduction
sidebar_position: 1
---

## Overview

Welcome to the developer documentation for the Computational Thinking App! This app is designed to help users develop computational thinking skills through a series of engaging games and activities. Our goal is to make learning about algorithms, problem-solving, and computational thinking concepts both enjoyable and accessible.

## Purpose

The purpose of this documentation is to:

- Guide developers in creating and maintaining games and features within the Computational Thinking App.
- Provide an in-depth understanding of the app's architecture, features, and best practices for development.
- Ensure consistency and adherence to coding standards across the project.

## Prerequisites

Before diving into this documentation, it's recommended that you have a basic understanding of the following concepts and technologies:

- JavaScript (ES6+)
- React
- Next.js
- Firebase
- Git and GitHub

Familiarity with these technologies will help you navigate and understand the documentation more effectively. However, if you're new to any of these concepts, don't worry! There are plenty of resources available online to help you learn and get up to speed.

## Technology Stack

This project uses a combination of technologies, libraries, and frameworks to deliver a smooth and efficient computational thinking app. Below is an outline of the key technologies, along with the reasons for choosing them.

### Frontend

- **Next.js**: The project uses [Next.js](https://nextjs.org/) as the primary framework for building a server-rendered React application. It offers a robust set of features like automatic code splitting, server-side rendering, and static site generation. 

- **React**: The project leverages [React](https://reactjs.org/) as the main UI library for building reusable components and managing application state. React was chosen for its performance, flexibility, and widespread adoption.

- **React Bootstrap**: [React Bootstrap](https://react-bootstrap.github.io/) is used for implementing responsive, mobile-first designs using Bootstrap's styling and components. It was chosen for its compatibility with React and the ease of creating visually appealing UI elements.

- **Bootstrap**: The project uses [Bootstrap](https://getbootstrap.com/) for styling and responsive design. Bootstrap was chosen for its comprehensive set of built-in CSS classes and components, which make it easy to create a consistent and professional-looking UI.

### Backend

- **Firebase**: The project relies on [Firebase](https://firebase.google.com/) for hosting, authentication, and cloud functions. 

- **Express**: [Express](https://expressjs.com/) is used as a minimal web framework for building the API in the Cloud Functions for Firebase. 

- **Express Validator**: [Express Validator](https://express-validator.github.io/) is a middleware library used for validating and sanitizing request data in the API. 

### Testing and Linting

- **Jest**: The project uses [Jest](https://jestjs.io/) as the testing framework for unit and integration tests.

- **React Testing Library**: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) is used for testing React components.

- **ESLint**: [ESLint](https://eslint.org/) is the project's linting tool, ensuring that the code adheres to the specified coding standards and conventions. 

- **MSW**: [Mock Service Worker (MSW)](https://mswjs.io/) is used for mocking API responses during testing, providing a seamless way to test components and functions that rely on API calls. 

### Miscellaneous Libraries

- **Immer**: [Immer](https://immerjs.github.io/immer/) is used for managing immutable state updates in a more readable and less error-prone way.

- **UUID**: [UUID](https://github.com/uuidjs/uuid) is a library for generating universally unique identifiers (UUIDs) in JavaScript.

- **QRCode**: [QRCode](https://github.com/soldair/node-qrcode) is a library for generating QR codes in various formats.

- **Loader Utils**: [Loader Utils](https://github.com/webpack/loader-utils) is a utility library used in the project for loader-specific tasks, such as parsing options and interpolating names.

- **WhatWG Fetch**: [WhatWG Fetch](https://github.com/github/fetch) is a polyfill for the Fetch API, which provides a modern, more flexible alternative to XMLHttpRequest for making network requests.

### Package Management

- **NPM**: The project uses [NPM](https://www.npmjs.com/) as the package manager for managing dependencies and running scripts. NPM was chosen for its extensive package registry, ease of use, and compatibility with the project's technologies.

For more details on the specific versions and configurations of these dependencies, refer to the `package.json` files in the project's root directory and the `functions` directory.

We hope you find this documentation helpful as you explore and contribute to the Computational Thinking App project. Happy coding!