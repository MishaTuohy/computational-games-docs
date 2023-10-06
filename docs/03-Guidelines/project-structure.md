---
id: project-structure
title: Project Structure
sidebar_position: 3
---

This section provides an overview of the organization of the project, including the purpose of each folder and file. It also explains the relationships and interactions between different components and modules.

## Folders and Files

The project is organized into the following directories and files:

- **root/**: The root directory contains the main configuration files for the project, such as `package.json`, `next.config.js`, and the `.gitignore` file.
    - **components/**: This directory contains reusable React components used throughout the application.
    - **domain/**: This directory contains the domain entites and configuration for the project.
    - **functions/**: This directory contains the Firebase Cloud Functions, which handle server-side processing and interactions with Firebase services.
    - **games/**: This directory contains the game components and assets for each of the games implemented in the application.
    - **helpers/**: This directory contains utility functions and helper code used across the project.
    - **hooks/**: This directory contains custom React hooks used to manage state and side effects in the application and game logic.
    - **pages/**: This directory contains the Next.js page components, which correspond to the individual pages and routes in the application.
    - **public/**: This directory contains static assets, such as images and fonts, that are served directly by the application.
    - **services/**: This directory contains code for interacting with external APIs and services, such as Firebase.
    - **styles/**: This directory contains global CSS and CSS modules and any styling utilities used in the application.
    - **utils/**: This directory contains utility functions and code used across the project.

## Relationships and Interactions

- **components**: The components in the `components` folder are used by the pages and/or games in the `pages` or `games` folder. Components may also interact with services in the `services` folder to fetch data or perform other API-related tasks.
- **domain**: The domain-specific entities and config in the `domain` folder are used by the components, hooks, and services to model the application's state and behavior.
- **functions**: The Firebase Cloud Functions in the `functions` folder are called by the services in the `services` folder when server-side processing or interaction with Firebase services is required.
- **games**: The game folder contains the Game specific html structure. Game logic and game specific components are organised into the `hooks` and `components` folders.
- **helpers, hooks, utils**: The code in the `helpers`, `hooks`, and `utils` folders is used throughout the application to provide utility functions, manage state and side effects, and perform general-purpose tasks.
- **pages**: The pages in the `pages` folder use components from the `components` folder to build the application's user interface. Pages may also interact with hooks and services to manage state and fetch data.
- **public**: The static assets in the `public` folder are used by components and pages throughout the application for styling and presentation purposes.
- **services**: The services in the `services` folder interact with external APIs and services, such as Firebase, to fetch data, perform authentication, and handle other API-related tasks. Services are used by components, pages, and hooks throughout the application.
- **styles**: The global CSS styles and styling utilities in the `styles` folder are used by components and pages throughout the application for styling and presentation purposes.