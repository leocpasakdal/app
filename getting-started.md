# Getting Started

### Install and run for development

    $ npm install
    $ npm run dev

### Run tests

    $ npm run test # run tests and watch for changes
    $ npm run test:once # run tests once
    $ yarn run test:once:coverage # with coverage report but slower

### Folder structure

    app
    |- helpers
    |  |- # Helper files related app configuration
    |- src
    |  |- # Main code folder
    |  |- __tests__
    |  |  |- # All unit tests
    |  |- client
    |  |  |- # Client side entry
    |  |  |- components
    |  |  | |- # Components not connected to the redux store. They should not use containers
    |  |  |- containers
    |  |  | |- # Components connected to the redux store
    |  |  |- redux
    |  |  | |- # Redux modules and store configurations
    |  |  |- scss
    |  |  | |- # Common scss helpers (e.g. colors, mixins, etc.)
    |  |  |- static
    |  |  | |- # Static files such as images, icons or dummy data
    |  |  |- utils
    |  |  | |- # Helper methods used in client side
    |  |- common
    |  |  |- # Common configurations and helpers between client and server.
    |  |- server
    |  |  |- # Server side entry
    |  |  |- helpers
    |  |  | |- # Helper methods used in server side
    |  |  |- managers
    |  |  | |- # manage different actions between client and server
    |- webpack
    |  |- # Webpack configurations for all the environments
    |- <dist>
    |  |- # Generated folder containing compiled code
    |- <coverage>
    |  |- # Generated folder containing code coverage information (after running 'npm test')
    |- <node_modules>
       |_ # Generated folder where all NPM dependencies will be downloaded

**Note**: The directories with brackets are the ones not tracked by git.

### Conventions

Using ESLint, StyleLint, SonarJs for managing code style conventions, detecting bugs and suspicious patterns in your code.

-   [.eslintrc.js](./.eslintrc.js)
-   [.stylelintrc](./.stylelintrc.js)

### Setup your editor

You are recommended to install the following plugins if you are using Visual Studio Code (VSCode):

-   eslint
-   prettier

After plugins installed, you need to update User Settings in VSCode with the following plugin configs:

-   "eslint.enable": true
-   "eslint.autoFixOnSave": true
-   "editor.formatOnPaste": true,
-   "editor.tabSize": 2,

### Steps whenever making a change

-   Create new branch from `develop`
-   Make sure all existing unit tests pass. If not, fix the implementation or broken tests
-   Refactor
-   Push your changes running the whole `prepush` Git hook. This will make sure all the quality checks pass
-   Create a PR pointing to `develop`, address comments and merge once approved.
-   To maintaing the quality of the code NEVER run `git commit` or `git push` with `--no-verify`!! as it will bypass all the pre commit hooks and push that will run all necessary quality checks.
