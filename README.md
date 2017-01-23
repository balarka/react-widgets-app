# react-webpack-express-server
A boilerplate server configuration to build React app, with express node server setup featuring ES6, SCSS, hot-reload support.

# Install and Running
```bash
git clone https://github.com/balarka/react-webpack-express-server.git
cd react-webpack-express-server
npm install
npm start
Open http://0.0.0.0:3000/ in your browser.
```
# Overview
This project runs with React, transpiling ES6/7 features with hot-reload support of assets. This setup enables both front-end development and API development using express node server simultaneously, for any UI interaction via json REST API. 

# Note
This project doesn't use webpack-dev-server for instant hot-reload, but instead uses middleware 'webpack-hot-middleware', as the former is memory intense during development.

# Linting
Run eslint to verify all files for lint errors/warnings.
```bash
npm run eslint
```
