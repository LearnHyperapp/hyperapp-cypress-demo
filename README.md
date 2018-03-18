# <img height=24 src=https://cdn.rawgit.com/JorgeBucaran/f53d2c00bafcf36e84ffd862f0dc2950/raw/882f20c970ff7d61aa04d44b92fc3530fa758bc0/Hyperapp.svg> Hyperapp Cypress Demo

[![Slack](https://hyperappjs.herokuapp.com/badge.svg)](https://hyperappjs.herokuapp.com "Join us")

## What is it?

This code demonstrates how to test a hyperapp project.
Originally adapted from [Mini Todo App](https://codepen.io/hyperapp/pen/zNxRLy).
This is the code I worked on while live streaming, which you can watch [here](https://www.youtube.com/watch?v=w8liCoPsDIU).


## Installation

Clone the repo and use npm or yarn to install dependencies.

<pre>
git clone <a href="https://github.com/LearnHyperapp/hyperapp-cypress-demo">https://github.com/LearnHyperapp/hyperapp-cypress-demo</a>
cd hyperapp-demo
npm i
</pre>

## Usage

There are two scripts provided in package.json: start, and test.

`npm start` will start the app on [localhost:8080](http://localhost:8080).
This needs to be running for Cypress to use it.

`yarn test` will start the cypress application.
This will open a window so you can control which spec files are being ran.
When you run a spec file test, it will load a new _controlled_ instance of Chrome.
From there, you will have an interface to see the results from tests, as well as an iframe of your app.

## Tests

To run tests in the interactive mode, start the server and then open Cypress

```
npm start &
npm test
```

To run tests on CI we need to start the server, run the tests and then close everything. This can be done using [start-server-and-test](https://github.com/bahmutov/start-server-and-test) utility.

```
npm run ci
```

### end to end tests

These tests assume the server is running and the page `locahost:8080` has the application page

- [cypress/integration/data_spec.js](cypress/integration/data_spec.js)
- [cypress/integration/list_spec.js](cypress/integration/list_spec.js)

### integration tests

These tests exercise individual view functions like `TodoItem` by mounting it as a "mini web app" and then using Cypress to interact with them

- [cypress/integrations/todo_item_spec.js](cypress/integrations/todo_item_spec.js)

### unit tests

These tests do not require DOM, but Cypress can run them anyway

- [cypress/integrations/actions_spec.js](cypress/integrations/actions_spec.js)
