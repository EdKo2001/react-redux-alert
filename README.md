<h1 align="center">REACT REDUX ALERT</h1>

<p align="center">
    <img align="center" src="https://user-images.githubusercontent.com/53624093/207136861-009ff481-edd7-40bc-9a99-e115384db2b2.gif">
</p>

## Stack

-   React
-   TypeScript
-   Ant Design
-   Redux + Redux Toolkit

## Mission

Implemented redux based alert component.
The main reason that prompted me to create is that calling Alert from any component made the code messy and duplicated code, so for now you can just call the show alert method with the message and alert type and it will do the rest.

**Example**:

    <Button onClick={() => dispatch(showModal({ message: "It's a success alert", type: "success" }))}>
	    Show Success Alert
    </Button>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
