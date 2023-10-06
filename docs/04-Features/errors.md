---
id: errors
title: Error Handling
sidebar_position: 6
---

The application implements an effective error handling strategy, which includes a generic error handling function and an ErrorBoundary component for React. This ensures a smooth user experience and maintains system stability in the event of unexpected issues.

## errorHandler
The `errorHandler` function is a generic error handling utility that logs errors and their context to the console. It also provides an optional `displayMessage` parameter to show an alert to the user when needed. This ensures that errors are logged for debugging purposes while also allowing for custom user-facing error messages when appropriate.

```javascript
function errorHandler(error, context, displayMessage) {
  console.error(`Error in ${context}:`, error);

  if (displayMessage) {
    // Display an alert to the user with the provided message
    alert(displayMessage);
  }
}
```

### ErrorBoundary
The `ErrorBoundary` component is a React error boundary that wraps the application components to catch JavaScript errors anywhere in the component tree. It prevents the entire app from crashing and provides a way to log error information. When an error is caught, it sets the `hasError` state to true and, if the router is available, navigates the user back to the homepage. The `ErrorBoundary` component is used in the App component, which wraps the main content of the application, ensuring that all child components are protected by the error boundary.

```javascript
import React, { Component } from 'react';
import { withRouter } from 'next/router';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error information
    console.error('Error caught by ErrorBoundary:', error, errorInfo);

    // Navigate user back to the homepage if router is available
    if (this.props.router) {
      this.props.router.push('/');
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default withRouter(ErrorBoundary);
```

## Usage
To use the error handling components, you can wrap your application's components with the `ErrorBoundary` component, and use the `errorHandler` function whenever an error occurs. Which is how it is currently implemented in `pages/_app.js`.

```javascript
import ErrorBoundary from '@/components/ErrorBoundary';
import errorHandler from '@/utils/errorHandler';

function App() {
  // Application component with error handling
  return (
    <ErrorBoundary>
      {/* Your application components */}
    </ErrorBoundary>
  );
}

// Example usage of the errorHandler function
try {
  // Code that may throw an error
} catch (error) {
  errorHandler(error, 'Example usage', 'An error occurred in the example usage');
}
```

In summary, the error handling system leverages a combination of a generic error handling function and a React ErrorBoundary component to provide a robust and efficient error handling strategy, ensuring a smooth user experience and maintaining system stability in the event of unexpected issues.