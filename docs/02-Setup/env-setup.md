---
id: env-setup
title: Environment Setup
sidebar_position: 2
---

## Setting Up the Development Environment

In this section, we'll walk you through the steps required to set up the development environment for the Computational Thinking App. Make sure to follow the steps [Getting Started](./getting-started) before starting this section. We'll cover the necessary software, tools, and dependencies, as well as instructions for installing dependencies, running the project locally, and configuring Firebase.

### Install Dependencies

In the project root, run:

```
npm install
```

### Configure Firebase

Obtain the Firebase configuration from the Firebase Console and create a .env.local (or .env.development) file in the project root. Add the Firebase configuration and API_URL (for QA testing) to the file:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_API_URL=API_URL
```

### Run the Development Server

Run the development server:

```
npm run dev
```

Access the app at http://localhost:3000. The server will automatically reload when you save changes.