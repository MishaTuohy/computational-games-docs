---
id: add-controller
title: Adding new API Controllers
sidebar_position: 3
---

This tutorial will guide you through the process of creating a new controller called `NumberGuesserController` for the Computational Thinking Games web application.

## Table of Contents

1. [Introduction](#introduction)
2. [Creating the Controller](#creating-the-controller)
3. [Defining Routes](#defining-routes)
4. [Implementing Route Handlers](#implementing-route-handlers)
5. [Adding Validation Rules](#adding-validation-rules)
6. [Registering the Controller](#registering-the-controller)

## Introduction

Controllers are responsible for handling API routes, validation, and error handling. In this tutorial, we will create a new controller for the number guessing game, which will include routes for creating, updating, and fetching game data.

## Creating the Controller

To create a new controller, first, import the required dependencies:

```javascript
const express = require('express');
const router = express.Router();
const handleErrors = require('../../handlers/handleErrors');
const { asyncHandler, success, notFound } = require('../../handlers/responseHandler');
const { validationMiddleware } = require('../../handlers/requestHandler');
const { createGameValidationRules, updateGameValidationRules } = require('./validation');
const DataModel = require('../../dataModel');
```

## Defining Routes

Define the routes for your controller using the `router` methods. For the `NumberGuesserController`, we will define the following routes:

- GET `/numberGuesserController/`: Retrieve all number guesser games
- GET `/numberGuesserController/:id`: Retrieve a specific number guesser game by ID
- POST `/numberGuesserController`: Create a new number guesser game
- DELETE `/numberGuesserController/:id`: Delete a number guesser game by ID
- PATCH `/numberGuesserController/:id`: Partially update a number guesser game by ID
- PUT `/numberGuesserController/:id`: Update a guesser game by ID

```javascript
router.get('/', asyncHandler(async (req, res)) => {});
router.get('/:id', asyncHandler(async (req, res)) => {});
router.post('/', createGameValidationRules, asyncHandler(async (req, res)) => {});
router.delete('/:id', asyncHandler(async (req, res)) => {});
router.patch('/:id', updateGameValidationRules, asyncHandler(async (req, res)) => {});
router.put('/:id', updateGameValidationRules, asyncHandler(async (req, res)) => {});
```

## Implementing Route Handlers

The `DataModel` instance allows you to interact with the `numberGuesserGames` collection in the Firestore database.

```javascript
const numberGuesserModel = new DataModel('numberGuesser');
```
Next, implement the route handlers for the defined routes. These handlers will interact with the `numberGuesserModel` instance, which is an instance of the `DataModel` class. 
```javascript
router.get('/', asyncHandler(async (req, res) => {
        const result = await numberGuesserModel.getAll();
        success(res, result);
    })
);

router.get('/:id', asyncHandler(async (req, res) => {
        const result = await numberGuesserModel.getById(req.params.id);
        if (!result) {
            return notFound(res);
        }
        success(res, result);
    })
);

router.post('/', validationMiddleware(createGameValidationRules), asyncHandler(async (req, res) => {
        const result = await numberGuesserModel.create(req.body);
        res.status(201).json(result);
    })
);

router.delete('/:id', validationMiddleware(createGameValidationRules), asyncHandler(async (req, res) => {
        const result = await numberGuesserModel.delete(req.params.id);
        if (!result) {
            return notFound(res);
        }
        success(res, null, 204);
    });
)

router.patch('/:id', validationMiddleware(createGameValidationRules), asyncHandler(async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        const doc = await numberGuesserModel.getById(id);
        if (!doc) {
            return notFound(res);
        }

        const updatedDoc = { ...doc, ...data };
        const updateResult = await numberGuesserModel.update(id, updatedDoc);
        if (!updateResult) {
            return notFound(res);
        }

        success(res, updatedDoc);
    });
)

router.put('/:id', validationMiddleware(createGameValidationRules), asyncHandler(async (req, res) => {
        const id = req.params.id;
        const data = req.body;

        const doc = await numberGuesserModel.getById(id);
        if (!doc) {
            return notFound(res);
        }

        const updatedDoc = { ...doc, ...data };
        const updateResult = await numberGuesserModel.update(id, updatedDoc);
        if (!updateResult) {
            return notFound(res);
        }

        const result = await numberGuesserModel.getById(id);
        success(res, result);
    });
)
```

## Adding Validation Rules

Define the validation rules for creating and updating number guesser games using the `express-validator` library. The rules should be applied as middleware to the route handlers for the `POST`, `PATCH` and `PUT` operations.

```javascript
const createGameValidationRules = checkSchema({
    // ... (validation rules for creating number guesser games)
    gameName: {
        in: ['body'],
        notEmpty: {
            errorMessage: 'Game name is required.',
        },
        isString: {
            errorMessage: 'Game name must be a string.',
        },
    },
    // ...
});

const updateGameValidationRules = checkSchema({
    // ... (validation rules for updating number guesser games)
    gameName: {
        in: ['body'],
        optional: true,
        notEmpty: {
            errorMessage: 'Game name is required.',
        },
        isString: {
            errorMessage: 'Game name must be a string.',
        },
    },
    // ...
});
```

## Registering the Controller
After creating the NumberGuesserController, you need to register it with the main application server. In the file where you set up the API server (index.js), import the new controller:

```javascript
const numberGuesserController = require('./api/controllers/numberGuesser/NumberGuesserController');
```

Then, add it to the list of controllers passed to the createServer function:

```javascript
const controllers = [
    // ... other controllers
    NumberGuesserController,
];

const app = createServer(controllers, corsOptions);
// ...
```
Now run `npm run serve` to run the functions emulator and make sure you are in the functions directory. You can test this out by changing the API_URL in your .env.local to the emulators in client-side application.

## Conclusion
In this tutorial, you have learned how to create a new controller called NumberGuesserController for the Computational Thinking Games web application. You have defined routes, implemented route handlers, added validation rules, and registered the controller with the main application server. This new controller will help you manage the number guessing game's data and provide an API for clients to interact with the game.