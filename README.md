# CREATE REACT APP TEMPLATE
## S4 NetQuest : scorm v1.0.1

Presented by:

<a href="https://s4netquest.com"><img src="https://s4-netquest.github.io/react-scorm-provider/images/s4-logo.png" alt="S4 NetQuest Logo" style="display: block; width: 100%; max-width: 250px;" /></a>

This custom Create-React-App (CRA) template is specific to the S4 NetQuest development process. It includes our most commonly utilized npm packages and project structure, in addition to a SCORM API connector and SCORM packager. The intended final delivery target for a React app built with this template is an LMS. Anyone is welcome to use this template, however it may change at any time without notice and with minimal regard to your use case (please fork your own version if you really like it). Here is what this template includes in addition to the CRA defaults:

* Dependencies:
  * [react-app-polyfill](https://www.npmjs.com/package/react-app-polyfill) ( imported in index.js for 'ie11' and 'stable' )
  * [react-router-dom](https://www.npmjs.com/package/react-router-dom)
  * [env-cmd](https://www.npmjs.com/package/env-cmd) ( load different .env configurations per environment )
  * [node-sass](https://www.npmjs.com/package/node-sass) ( add sass compiling to CRA )
  * [react-scorm-provider](https://www.npmjs.com/package/react-scorm-provider) ( enable SCORM API communication )
  * [simple-scorm-packager](https://www.npmjs.com/package/simple-scorm-packager) ( bundle for SCORM )
* Custom NPM Scripts:
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
5. to build for web, run `npm build`
6. to bundle for SCORM, run `npm run build:scorm`