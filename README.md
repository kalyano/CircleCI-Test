# Simple Web App

## Overview
This repository contains a simple web application built as part of a technical challenge for CircleCI. The application demonstrates:
- A button that, when clicked, updates the page to display a new message.
- Automated testing using Jest to verify functionality.
- A CircleCI pipeline to automate building and testing the application.

---

## Application Details
### Functionality
- **Frontend**:
  - A single HTML page (`index.html`) with a button labeled "Click Me".
  - Clicking the button displays the message: *"Hello, CircleCI!"*.
- **Testing**:
  - A Jest test suite checks that the message appears when the button is clicked.

### Technology Stack
- **Frontend**: HTML, JavaScript
- **Testing Framework**: Jest with jsdom
- **CI/CD Tool**: CircleCI

---

## Project Structure
```bash
/project-root
├── index.html         # Main application page
├── script.js          # JavaScript handling the button functionality
├── tests/
│   └── app.test.js    # Test suite for the application
├── package.json       # Node.js project metadata
├── .circleci/
│   └── config.yml     # CircleCI pipeline configuration
```

---

## Running Locally
1. **Clone the repository**:
   ```bash
   git clone https://github.com/kalyano/simple-app.git
   cd simple-web-app
2. Install dependencies:
   ```bash
   npm install
3. Run the application:
   Open index.html in your browser to interact with the app.

## Running Tests
1. ```bash
   npm test

Expected output:
	•	The test suite should confirm that clicking the button updates the page text.

## CircleCI Configuration

Workflow

The .circleci/config.yml file automates:

	1.	Code Checkout: Clones the repository in the CircleCI environment.
	2.	Dependency Installation: Installs the necessary npm dependencies.
	3.	Testing: Runs npm test to validate the application.

config.yml:
```bash
version: 2.1
jobs:
  build:
    docker:
      - image: circleci/node:current
    steps:
      - checkout
      - run:
          name: Install dependencies
          command: npm install
      - run:
          name: Run tests
          command: npm test
workflows:
  version: 2
  build-and-test:
    jobs:
      - build
  ```
