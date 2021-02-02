> Basic hot reloading with webpack 5 not working properly

![demo](demo.gif)

## Issues

- It is loading the entire page

-----

- **Operating System:** _macOS Big Sur 11.2_
- **Node Version:** _v14.15.4_
- **NPM Version:** _6.14.10_
- **webpack Version:** _^5.19.0_
- **webpack-dev-server Version:** _^4.0.0-beta.0_
- **Browser:** _Google Chrome Version 88_

- [x] This is a **bug**

### Code

Repository link: https://github.com/Ridermansb/webpack5Hot

- [`master`](https://github.com/Ridermansb/webpack5Hot) branch it's using only basic webpack-dev-server configuration without any plugins
- [`react-hot-loader`](https://github.com/Ridermansb/webpack5Hot/tree/react-hot-loader) branch it's using [react-hot-loader](https://github.com/gaearon/react-hot-loader) plugin. **[Pull Request #1](https://github.com/Ridermansb/webpack5Hot/pull/1)**
- [`react-refresh-webpack-plugin`](https://github.com/Ridermansb/webpack5Hot/tree/react-refresh-webpack-plugin) branch it's using [pmmmwh/react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin) webpack plugin. **[Pull Request #2](https://github.com/Ridermansb/webpack5Hot/pull/2)**

### Expected Behavior

In all case... should not reload the page and only reload the portion that's changed


### Actual Behavior

It's Always reloading the entire page.

### How can we reproduce the behavior?

Just clone the repository [ridermansb/webpack5Hot](https://github.com/Ridermansb/webpack5Hot)

- `npm install`
- `npm start`

And try update `Header` component
