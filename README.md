## create-react-app-sass

A `create-react-app` bootstrapped boilerplate project, with SASS support.

Project was created with `react-scripts` v2.0.5.

To request an update at a future date open an issue or a PR.

How this differs from the boilerplate:
- Moved the default App component into src/components
- Created src/stylesheets and set up 7 folders using the 7-1 pattern. Some of them are empty. Some have files and suggested values and/or values that I frequently reuse when starting new projects. See [this](https://github.com/HugoGiraudel/sass-boilerplate) project for reference.
- Renamed index.[s]css to main.[s]css

### Usage

1. Clone this project
2. `yarn install`
3. Run `yarn watch-css` during development, in addition to the standard `yarn start`
4. Reinitialise a git project if you'd like to clear out the boilerplate generation commit history. `rm -rf .git && git init`
