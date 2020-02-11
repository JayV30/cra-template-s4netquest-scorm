# This is a custom CRA template. (cra-template-s4netquest-scorm)

Please see the original CRA README.md contents below this custom template information.

This custom Create-React-App (CRA) template is specific to the S4 NetQuest development process. It includes our most commonly utilized npm packages and project structure, in addition to a SCORM API connector and SCORM packager. The intended final delivery target for a React app built with this template is an LMS. Anyone is welcome to use this template, however it may change at any time without notice and with minimal regard to your use case (please fork your own version if you really like it). Here is what this template includes in addition to the CRA defaults:

* Dependencies:
  * [react-app-polyfill](https://www.npmjs.com/package/react-app-polyfill) ( imported in index.js for 'ie11' and 'stable' )
  * [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  * [env-cmd](https://www.npmjs.com/package/env-cmd) ( load different .env configurations per environment )
  * [node-sass](https://www.npmjs.com/package/node-sass) ( add sass compiling to CRA )
  * [react-scorm-provider](https://www.npmjs.com/package/react-scorm-provider) ( enable SCORM API communication )
  * [simple-scorm-packager](https://www.npmjs.com/package/simple-scorm-packager) ( bundle for SCORM )
* Custom Scripts:
  * `install-dev-deps` ( install storybook, a number of storybook addons )
    * Run this command after CRA installs to install these devDependencies - these cannot be included in the custom template
  * `build:stage` ( runs a production build using the .env.staging file as environment variables )
  * `build:scorm` ( runs a production build and then packages the build directory for SCORM using the configuration in `scoPacakger.js` )
  * `storybook` ( runs storybook dev server )
  * `build-storybook` ( builds the storybook for deployment to a server )
* Features
  * Sass compiles from any imported .sass file ( default `src/style/index.sass` is imported to `src/index.js` )
  * Bulma 0.8.0 sass files are included in `src/style/bulma-0.8.0` and imported to project by default
  * Absolute imports from `/src` are enabled, relative imports are not necessary
  * Service Worker registration is set via an environment variable at build time `REACT_APP_REGISTER_SERVICE_WORKER` (`1` or `0`)
  * SCORM higher-order component built-in. `props.sco` will be passed to any component enhanced with `withScorm()(TargetComponent)`
  * SCORM packager run from npm scripts

### Installing
1. `npx create-react-app PROJECT_NAME --template cra-template-s4netquest-scorm`
2. after install, run `npm run install-dev-deps`
3. use `_package-json-overrides.json` to override the values in the created `package.json` file ( `_package-json-overrides.json` can then be deleted )
4. begin working on your project
5. to build for web, just run `npm build`
6. to bundle for SCORM, run `npm run build:scorm`

# ORIGINAL CRA README.MD CONTENTS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify