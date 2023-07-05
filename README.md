# Podcast player application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive.

### `npm run test:watch`

Launches the test runner in watch mode.

### `npm run format`

launch prettier to review all files 

### `npm run lint`

launch lint & review files problems 

### `npm run lint:fix`

launch lint, review files problems & try to fix if is posible

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Launch production App

It can be served with a static server, for example with serve, we can do this by passing it the build directory created earlier in the following way:

<code>yarn global add serve
serve -s dist
</code>

## CORS Proxy
To enable cors you must request access on this demo app for developer purposes:
[https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo)
