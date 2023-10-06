---
id: add-auth
title: Add New Auth Methods
sidebar_position: 4
---

DISCLAIMER: This document outlines the general steps and process of adding new auth methods, if you copy and paste this code, it will not work. 

If you wish to add new authentication methods, such as Google, Facebook, or Twitter, you can follow these steps:

### 1. Import the required provider

First, import the required provider in the `FirebaseAuthService.js` file. For example, for Google authentication, you can import the `GoogleAuthProvider`:

```javascript
import { GoogleAuthProvider } from 'firebase/auth';
```

### 2. Create the provider instance
Create a new instance of the authentication provider. For example, for Google authentication, you can create a new instance of GoogleAuthProvider:

```javascript
const googleProvider = new GoogleAuthProvider();
```

### 3. Add a new login function
Create a new login function in the FirebaseAuthService.js file for the specific authentication method. For example, for Google authentication, you can create a `logInWithGoogle` function:

```javascript
const googleProvider = new GoogleAuthProvider();

export async function logInWithGoogle() {
  try {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
  } catch (error) {
    console.error('Failed to log in with Google', error);
    throw error;
  }
}
```

In this function, we're using the `signInWithPopup` method provided by Firebase to authenticate the user using a popup window. You can also use the `signInWithRedirect`.

### 4. Update the AuthContext
Update the `AuthContext` in the `AuthProvider.js` file to include the new login function. For example, for Google authentication, you can update the value of the `AuthContext` like this:

```javascript
import { logInWithGoogle } from '../FirebaseAuthService';

return (
  <AuthContext.Provider value={{ user, logIn, logOut, logInWithGoogle }}>
    {children}
  </AuthContext.Provider>
);
```

### 5. Use the new login function in your game component
Finally, in your game component, you can now use the useAuth hook to access the new login function and authenticate the user using the new method. For example, for Google authentication, you can do the following:

```javascript
import { useAuth } from '@/services/firebase/auth/AuthProvider';

function Component() {
  const { logInWithGoogle } = useAuth();

  // Use the logInWithGoogle function to log in the user with Google
  const handleGoogleLogin = async () => {
    try {
      await logInWithGoogle();
    } catch (error) {
      console.error('Failed to log in with Google', error);
    }
  };
}
```

By following these steps, you can easily add new authentication methods to your game and provide users with more options to sign in.

For more information on adding other authentication providers, consult the [Firebase documentation](https://firebase.google.com/docs/auth/web/start).