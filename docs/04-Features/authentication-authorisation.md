---
id: authentication-authorisation
title: Authentication and Authorisation
sidebar_position: 3
---

# Authentication and Authorisation

The Computational Thinking App includes a robust authentication and authorization system, enabling users to create accounts, log in, and access their personalized content and settings. This system is built using Firebase Authentication, which provides a secure and scalable solution for managing user accounts and credentials.

## FirebaseAuth
FirebaseAuth is a secure and easy-to-use service provided by Firebase that handles user authentication. It supports a variety of authentication methods, such as email and password, social media logins, and anonymous authentication. In the Computational Thinking App, FirebaseAuth is used to enable users to log in anonymously or with their preferred authentication method.

## AuthProvider
The `AuthProvider` component is a React context provider that wraps the entire application, making the authentication state and functions accessible to all components. It utilizes the AuthService to manage user authentication, including logging in, logging out, and subscribing to authentication state changes. The useAuth custom hook is provided for components to easily access the authentication context. This approach centralizes the authentication logic, making it easier to manage and update throughout the application.

```javascript
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = subscribeToAuthChanges((currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

```

By wrapping the entire application with the `AuthProvider`, the authentication state and functions become accessible to all components using the `useAuth` custom hook.

```javascript
import { AuthProvider } from './AuthProvider';

export default function App({ Component, pageProps }) {
    const Layout = Component.getLayout || ((page) => page);
    const router = useRouter();

    return (
        <AuthProvider>
            {Layout(
                <ErrorBoundary router={router}>
                    <Component {...pageProps} />
                </ErrorBoundary>
            )}
        </AuthProvider>
    );
}

```

Components can then use the `useAuth` custom hook to access the user's authentication state and perform actions like logging in, logging out, or displaying user-specific content.

```javascript
import { useAuth } from '@/services/firebase/auth/AuthProvider';

function MyComponent() {
  const { user } = useAuth();

  if (user) {
    return <div>Welcome, {user.displayName}!</div>;
  } else {
    return <div>Please log in to access this content.</div>;
  }
}
```

In summary, the Computational Thinking App's authentication and authorization system is built using Firebase Authentication and a custom React context provider. FirebaseAuth offers a secure and scalable solution for managing user accounts and credentials, while the `AuthProvider` component centralizes authentication logic and makes it accessible to all components. This approach ensures a seamless and secure user experience across the application.

### Adding new Authentication Methods

To add new ways to authenitcate players, navigate to [Add new Auth Methods](../Tutorials/add-auth)