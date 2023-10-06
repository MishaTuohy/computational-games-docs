---
id: game-creation-tools
title: Game Creation Tools
sidebar_position: 4
---

The Computational Thinking App enables developers to create their own games using pre-built tools and services provided by the software. The system includes a modular game creation framework, allowing developers to build games with their own mechanics by combining and extending the provided components. The following components play a crucial role in the game creation process:

## Game Service
The Game Service offers methods for interacting with game sessions, such as joining, leaving, initializing, and updating game states. The functions provided include `getGame`, `updateParticipants`, `updateGameState`, `initialiseGame`, `joinGame`, `deleteGame`, and `removeParticipant`.

```javascript
export async function getGame(id) {
    // ...
}

export async function updateParticipants(id, updatedParticipants) {
    // ...
}

export async function updateGameState(id, game_state) {
    // ...
}

export async function initialiseGame(gameName) {
    // ...
}

export async function joinGame(id, userID) {
    // ...
}

export async function deleteGame(id) {
    // ...
}

export async function removeParticipant(userID, id) {
    // ...
}

```

To understand the GameSerive further, navigate to [here](../Design/low-level#game-service).

## Game Factory
The Game Factory handles the creation of game instances and game session management. The `createGame` and `createGameInstance` functions are responsible for creating new game instances based on the game type provided. Each time a new game object is added, the createGame and createGameInstance switch statement is updated to recognise a new game type.

```javascript
class GameFactory {
  export function createGame(type) {
    switch (type.toLowerCase()) {
    case '':
        // ...
    }
}

export function createGameInstance(type) {
    switch (type.toLowerCase()) {
    case '':
        // ...
    }
}
}
```

## Game Page Factory
The Game Page Factory manages the creation and rendering of game pages based on the game type and ID. The `createGamePage` function generates the appropriate React component for the specified game type and passes the game ID as a prop. The same true for game components as it is for game objects, new game components are added to the createGamePage list of supported games.

```javascript
export function createGamePage(type, id) {
    switch (type.toLowerCase()) {
    case '':
        // ...
    }
}

```

## Pre-built Custom Hooks
The framework includes a set of pre-built custom hooks that simplify managing game components and interactions, such as debouncing values, updating game states, handling exit actions, and initializing games.

```javascript
function useUpdateGameState() {
  // Logic to update the game state
}

function useHandleExit() {
  // Logic to handle exit actions
}

function useInitializeGame() {
  // Logic to initialize a game
}
```

To read up more on custom hooks, navigate [here](../Design/low-level#gamehook-components-interaction)

In summary, the Computational Thinking App provides a modular game creation framework that allows developers to create custom games by combining and extending the provided components. This enables developers to focus on developing the game components themselves rather than worrying how users will access their games.