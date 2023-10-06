---
id: ci-cd
title: CI/CD
sidebar_position: 8
---

The project utilizes a GitLab CI/CD pipeline with a custom configuration file to automate the build, test, and deploy processes. This helps maintain high code quality and security standards while enabling rapid delivery of new features and bug fixes.

### Pipeline Stages
The GitLab CI/CD pipeline is organized into three main stages: Build, Test, and Deploy. Each stage is responsible for different aspects of the development and deployment process.

### Build Stage
The build stage installs the required dependencies and builds the application. Using the Node.js image, it runs `npm ci` to install dependencies in a clean state and then runs `npm run build` to build the application. Artifacts generated in this stage, including `node_modules`, are stored for use in subsequent stages.

```yaml
build:
  stage: build
  image: node
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - node_modules/
      - .next/
```

Test Stage
In the test stage, the pipeline runs two jobs: lint-hosting and test-hosting. The lint-hosting job runs ESLint with the npm run lint:fix command, checking for and automatically fixing any code style issues. The test-hosting job runs the Jest test suite with npm run test and performs an npm audit to check for high-level vulnerabilities in the dependencies.

### Pipeline Configuration

The GitLab CI/CD configuration is defined in a `.gitlab-ci.yml` file located at the root of the project:

```yaml
stages:
  - build
  - test
  - deploy

# ... rest of the configuration ...
```

### Test Stage
In the test stage, the pipeline runs two jobs: `lint-hosting` and `test-hosting`. The lint-hosting job runs ESLint with the npm run lint:fix command, checking for and automatically fixing any code style issues. The test-hosting job runs the Jest test suite with npm run test and performs an npm audit to check for high-level vulnerabilities in the dependencies.

```yaml
lint-hosting:
  stage: test
  image: node
  script:
    - npm ci
    - npm run lint:fix

test-hosting:
  stage: test
  image: node
  script:
    - npm ci
    - npm run test
    - npm audit
```

### Deploy Stage
The deploy stage consists of two jobs: `deploy-functions` and `deploy-hosting`. These jobs are only executed if the changes are made to the default branch. The deploy-functions job deploys any changes made to the Firebase Functions using the `firebase deploy --only functions` command. The deploy-hosting job deploys the application's hosting.

```yaml
deploy-functions:
  stage: deploy
  image: node
  script:
    - npm ci
    - firebase deploy --only functions
  only:
    - main

deploy-hosting:
  stage: deploy
  image: node
  script:
    - npm ci
    - npm run build
    - firebase deploy --only hosting
  only:
    - main
```

By understanding the main features and functionalities of the Computational Thinking App, developers can better comprehend the application's structure and interactions, enabling them to contribute more effectively to the project. The GitLab CI/CD pipeline streamlines the development process, ensuring a high-quality application while enabling rapid and secure delivery of new features and bug fixes.