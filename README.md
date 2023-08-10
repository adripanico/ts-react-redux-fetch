# TS + React + Redux + Fetch

[Live demo](https://adripanico.github.io/ts-react-redux-fetch/)

## Stack

This project is a basic [**React**](https://react.dev/) application written entirely in [**TypeScript**](https://www.typescriptlang.org/). The scaffolding has been done with the [template provided by **Vite**](https://vitejs.dev/guide/).

The application performs requests to a [public API](https://rickandmortyapi.com/) using the standard [**Fetch API**](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and uses [**Redux Toolkit**](https://redux-toolkit.js.org/) and [**React Redux**](https://react-redux.js.org/) to handle the received data and deal with pagination and search capabilities.

[**CSS modules**](https://github.com/css-modules/css-modules) have been used for better isolation of styles. All the class definitions have been written using [**SASS**](https://sass-lang.com/) with [**SCSS**](https://sass-lang.com/documentation/syntax/#scss) syntax.

[**React router**](https://reactrouter.com/) is used to deal with application routing.

For code syntax and format analysis, the application is using [**ESLint**](https://eslint.org/) and [**prettier**](https://prettier.io/).

## Online playground

You can mess around with this code on [StackBlitz](https://stackblitz.com/edit/ts-react-redux-fetch-hwqqp4).

## Development

Clone the repo, install the dependencies and run it:

```
$ npm i
$ npm run dev
```

The application will be available in [http://localhost:5173](http://localhost:5173).
