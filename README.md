# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Portfolio Refactor

## Current state

## Current Observations & Risks (Coupling Hotspots)

Based on the observed structure (file structure, imports, and React style), here are the places where **coupling** is likely to be **high or problematic**:

### 1. `context.js`

**Dependencies:** `react` and `./data`

**Observation:** This file **directly couples the React context layer to your data layer** (`data.js`). This means any change in your data structure (like new icon sets or project data formats) could break the core context logic.

**Ideal:** Isolate data fetching or domain data into separate service hooks (e.g., `useData.js`) and let `context.js` only manage state, not raw data dependencies.

* **⚠️ Moderate Coupling** — Functional, but can be better modularized.

### 2. `data.js`

* **Dependencies:**

**Internal:** `./assets/index.assets`

**External:** Several icon libraries (`react-icons`, `@fortawesome/*`)

**Observation:** This file acts as a **shared data + visual resource hub**, pulling in many icons from multiple external sources. This creates **tight coupling** to those external icon libraries.

**Risk:** If you ever change the icon library or asset structure, this file (and anything that uses it) will need extensive updates. If many components consume objects or arrays defined here, they indirectly become coupled to this single implementation.

**⚠️ High Coupling** — This is the biggest dependency cluster in the data layer.

## Current Stage to the date:

Based on the observed structure (file structure, imports, and React style), here are the places where **decoupling** was **made**:

### 1. `src/App.js`

**Main Component:** `HomePage` 

**Observation:** This main component was decoupled and the website portfolio has been started to be updated.