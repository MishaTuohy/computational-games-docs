# Computational Thinking App Documentation

This documentation website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator powered by [React](https://react.dev/).

## Installation

To set up the documentation locally, follow these steps:

1. Clone the repository.
```
   $ get clone https://...
```
2. Install the required dependencies by running:
```
   $ npm install
```
## Local Development

To start the local development server, run:
```
   $ npm run start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

To generate static content for the documentation, run:
```
   $ npm run build
```
This command generates static content into the `build` directory and can be served using any static content hosting service.

## Serve
To serve the production build locally, run:
```
   $ npm run serve
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Scripts

Here's a list of available scripts in the `package.json`:

- `docusaurus` - The main Docusaurus command.
- `start` - Starts the local development server.
- `build` - Generates static content for the documentation.
- `swizzle` - Swizzles a Docusaurus theme.
- `clear` - Clears the cache.
- `serve` - Serves the static content generated in the `build` directory.
- `write-translations` - Writes translations to disk.
- `write-heading-ids` - Writes heading IDs to disk.

## Contributing to the Documentation

To make changes or contribute to the Computational Thinking App documentation, follow these guidelines:

1. Clone it to your local machine.
2. Create a new branch for your changes: `git checkout -b my-feature-branch`
3. Make the necessary changes in the documentation files.
4. Test your changes locally by running the local development server (`npm run start`) and verify that everything looks as expected.
5. Commit your changes to your branch and push them to your fork.
6. Create a pull request on the main repository, describing the changes you made and why they are needed.
7. Wait for a maintainer to review your pull request and provide feedback. If necessary, make additional changes and update your pull request.
8. Once your pull request is approved, it will be merged into the main branch, and your changes will be included in the documentation.

## Additional Resources

For a deeper understanding of Docusaurus and its capabilities, refer to the [official Docusaurus documentation](https://docusaurus.io/docs).

To learn more about React, the library that powers Docusaurus, visit the [official React documentation](https://react.dev/).

We appreciate your contributions to the Computational Thinking App documentation and look forward to working together to create a comprehensive and useful resource for developers.
