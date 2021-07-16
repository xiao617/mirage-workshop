This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Install dependencies
```
npm install
```
## Mirage Install

```
#Using npm
npm install --save-dev miragejs

#Using Yarn
yarn add --dev miragejs
```


## About Cypress

### Cypress install
```
npm install cypress --save-dev
npx cypress open
```
After run **npx cypress open** will generate cypress folder


setting in cypress/support/index.js
```javascript=
// cypress/support/index.js
Cypress.on("window:before:load", (win) => {
  win.handleFromCypress = function (request) {
    return fetch(request.url, {
      method: request.method,
      headers: request.requestHeaders,
      body: request.requestBody,
    }).then((res) => {
      let content = res.headers.get("content-type").includes("application/json")
        ? res.json()
        : res.text()
      return new Promise((resolve) => {
        content.then((body) => resolve([res.status, res.headers, body]))
      })
    })
  }
})
```

Run Cypress
```
npx cypress run --spec "cypress/integration/mp-spec.js"

npx cypress run --browser chrome

npx cypress run
//run all tests 

npm cypress open

```


### Reference
Mirage Workshop Demo in Codesandbox:
https://codesandbox.io/s/mirage-workshop-sd8zp?file=/src/App.tsx

Start with Mirage:
https://miragejs.com/docs/getting-started/introduction/


Mirage with Cypress: 
https://miragejs.com/quickstarts/cypress/

https://github.com/miragejs/examples/blob/master/react-local-dev-and-cypress/src/index.js