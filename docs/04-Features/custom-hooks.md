---
id: custom-hooks
title: Custom Hooks
sidebar_position: 12
---

In this section, we will go in-depth on the following custom hooks and explain how they work and how to use them.

- useGenericInitializeGame
- useGenericExitGame
- useGameUpdate
- useDebounce
- useListenToDoc
- useGenericInitializeGame

This custom hook is used to initialize a game session with an updated game state. It only allows initialization once to prevent unnecessary calls.

## useGenericInitializeGame
This custom hook is used to initialize a game session with an updated game state. It only allows initialization once to prevent unnecessary calls.

```javascript
import { updateGameState } from '@/services/games/GameService';
import { useState, useCallback } from 'react';

export function useGenericInitializeGame() {
    const [isInitialized, setIsInitialized] = useState(false);

    const initialize = useCallback(async (gameID, updatedGameState) => {
        if (!isInitialized) {
            if (updatedGameState) {
                setIsInitialized(true);
                await updateGameState(gameID, updatedGameState);
                return true;
            }
        }
    }, [isInitialized]);

    return { initialize, isInitialized };
}
```

### How it works
`. isInitialized is a state variable that keeps track of whether the game has already been initialized.
2. initialize is a function that takes in two arguments: gameID and updatedGameState. The function first checks if isInitialized is false. If it is, it checks if there's an updatedGameState. If there is, it sets isInitialized to true, updates the game state using the updateGameState function from the GameService, and returns true.

### How to use it

```javascript
import { useGenericInitializeGame } from '@/hooks/customHooks/useGenericInitializeGame';

const { initialize, isInitialized } = useGenericInitializeGame();

const someFunction = async () => {
    const updatedGameState = {
        // ... some game state updates
    };

    const success = await initialize(gameID, updatedGameState);

    if (success) {
        console.log('Game initialized successfully');
    }
};
```

## useGenericExitGame
This custom hook helps manage the process of exiting a game. It navigates the user back to the homepage, updates the game (if necessary), and logs out the user.

```javascript
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import errorHandler from '@/helpers/errorHandler';

export default function useGenericExitGame(gameID, user, updateGame=null, logOut) {
    const router = useRouter();

    const exitGame = useCallback(async () => {
        router.push('/');

        try {
            if(updateGame) {
                await updateGame(gameID, user?.uid);
            }
            await logOut();
        } catch (error) {
            errorHandler(error, 'exitGame');
        }
    }, [router, gameID, user?.uid, updateGame, logOut]);

    return { exitGame };
}
```

### How it works
1. useRouter from next/router is used to access the router instance.
2. exitGame is a function that first navigates the user back to the homepage by calling router.push('/').
3. If an updateGame function is provided, it calls the function with the gameID and user.uid. It then calls the logOut function to log out the user. If an error occurs during this process, the errorHandler function is called to handle it.

### How to use it
```javascript
import useGenericExitGame from '@/hooks/customHooks/useGenericExitGame';

const { exitGame } = useGenericExitGame(gameID, user, updateGame, logOut);
const someFunction = () => {
    // ... some logic

    exitGame();
};
```

## useGameUpdate
This custom hook listens for updates to a game session and updates the game state accordingly.

```javascript
import useListenToDoc from '@/hooks/services/firebase/useListenToDoc';
import { useState, useEffect } from 'react';
import { isEqual } from 'lodash';

export default function useGameUpdate(gameID) {
    const [gameSession, setGameSession] = useState(null);
    const [gameState, setGameState] = useState(null);
    const stateListener = useListenToDoc('gameSessions', gameID);

    useEffect(() => {
        if (!isEqual(stateListener, gameSession)) {
            setGameSession(stateListener);
            if (!isEqual(stateListener?.gameState, gameState)) {
                setGameState(stateListener?.gameState);
            }
        }
    }, [stateListener]);

    return { gameSession, gameState, setGameSession, setGameState };
}
```

### How it works
1. useListenToDoc is called with the gameSessions collection path and the gameID to listen for updates to the game session document.
2. gameSession and gameState are state variables used to store the current game session and game state.
3. An useEffect hook is used to compare the stateListener (current game session document data) with the gameSession state variable. If they are not equal, it updates gameSession and checks if the gameState property of stateListener is equal to the current gameState. If they are not equal, it updates the gameState.

### How to use it
```javascript
import useGameUpdate from '@/hooks/customHooks/useGameUpdate';

const { gameSession, gameState, setGameSession, setGameState } = useGameUpdate(gameID);

// ... Use gameSession and gameState in your component logic
```

## useDebounce
This custom hook debounces a value, delaying the update of the debounced value until a specified delay has passed.

```javascript
import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
```

### How it works
1. debouncedValue is a state variable that stores the debounced version of the input value.
2. The useEffect hook sets a timeout to update the debouncedValue with the current value after the specified delay. If the input value changes before the timeout has passed, the previous timeout is cleared and a new one is set.

### How to use it
```javascript
import useDebounce from '@/hooks/customHooks/useDebounce';

const searchValue = 'example';
const debouncedSearchValue = useDebounce(searchValue, 300);

// ... Use debouncedSearchValue in your component logic
```

## useListenToDoc
This custom hook listens for updates to a Firestore document and updates the state with the latest document data.

```javascript
import { useState, useEffect, useMemo } from 'react';
import { getFirebaseServices } from '@/services/firebase/FirebaseService';
import { doc, onSnapshot } from 'firebase/firestore';

const database = getFirebaseServices().firestore;

export default function useListenToDoc(collectionPath, documentId) {
    const [data,setData] = useState(null);

    useEffect(() => {
        const documentRef = doc(database, collectionPath, documentId);
        const unsubscribe = onSnapshot(documentRef, (document) => {
            if (document.exists) {
                setData(document.data());
            } else {
                setData(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [collectionPath, documentId]);

    return useMemo(() => data, [data]);
}
```

### How it works

1. The `useListenToDoc` hook takes in two arguments: `collectionPath` and `documentId`. These are used to construct the Firestore document reference.
2. A state variable, `data`, is used to store the document data.
3. The `useEffect` hook sets up a Firestore document snapshot listener using the `onSnapshot` function. When the document is updated, the listener is triggered and updates the `data` state variable with the new document data. If the document does not exist, `data` is set to `null`.
4. When the hook is unmounted or the dependencies change, the Firestore listener is unsubscribed by calling the `unsubscribe` function returned by `onSnapshot`.
5. The `useMemo` hook is used to return a memoized version of the `data` state variable, ensuring that it only updates when `data` changes.

### How to use it

```javascript
import useListenToDoc from '@/hooks/customHooks/useListenToDoc';

const collectionPath = 'users';
const documentId = 'user123';

const userData = useListenToDoc(collectionPath, documentId);

// ... Use userData in your component logic
```

By understanding these custom hooks and their usage, developers can make efficient use of these hooks to manage application state, control updates, and interact with external services like Firestore.