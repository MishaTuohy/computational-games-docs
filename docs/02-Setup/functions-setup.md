---
id: functions-setup
title: Functions Setup
sidebar_position: 3
---

## Setting Up Firebase Functions Locally

In this section, we'll walk you through the process of setting up Firebase Functions locally in the "functions" directory. Make sure to follow the steps [Getting Started](./getting-started) before starting this section. We'll cover installing dependencies, running the emulators, and testing changes by modifying the API_URL in your .env.local or .env.development file.

### Navigate to the Functions Directory

In your terminal, navigate to the "functions" directory inside the project:

```
cd functions
```

### Install Dependencies

In the "functions" directory, run:

```
npm install
```

### Run the Firebase Emulators

To start the Firebase emulators, run the following command in the "functions" directory:

```
npm run serve
```

This command will start the emulators for the Cloud Functions, which can be accessed through the printed URL in the terminal (e.g., http://localhost:5001).

### Configure API_URL for Testing

To test the changes you make in the Firebase Functions, you'll need to modify the value of API_URL in your .env.local or .env.development file. Replace the existing value with the URL of the emulated API:

```
NEXT_PUBLIC_API_URL=http://localhost:5001/your-project-id/us-central1/your-api-endpoint
```

Save the file, and the development server will automatically reload. Now, when you interact with the app, it will use the emulated API instead of the deployed API.

### Available Scripts

Here are the main scripts in the `package.json` file for the Firebase Functions:

```
"serve": "firebase emulators:start --only functions",
"deploy:dev": "firebase use development & firebase deploy --only functions",
"deploy:prod": "firebase use default & firebase deploy --only functions",
"logs": "firebase functions:log"
```