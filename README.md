# REACT PLAYGROUND

[![Netlify Status](https://api.netlify.com/api/v1/badges/03e87063-5161-42f8-a543-0c535a43ab61/deploy-status?branch=main)](https://app.netlify.com/sites/gsag-url-shortener/deploys)

Just a playground repo using React + Vite and related stuff.

Created with command `npm create vite@latest`

## Before start

Install nvm or similiar - https://github.com/coreybutler/nvm-windows  
**.nvmrc** file describes project's nodejs version.  
**node-install.ps1** file configures nodejs version on nvm-windows.

Run `npm start` for start local dev server or `npm serve` to build and run the application.

## Which tecnologies this project uses?

-   **Typescript** for better javascript code typing.
-   **React** for app construction and componentization.
-   **Emotion** for components styling.
-   **Vite** for build and tooling.
-   **Vitest** for test tooling and setup
-   **ESLint** for code best practices and linting.
-   **Prettier** for code formatting.

## Build the project

Run `npm run build` for local build or `npm run build:ci` for CI build on [Netlify](https://netlify.com/) (see more on [docs](https://docs.netlify.com/get-started/)).

## Deploy a draft

Run `npm run deploy` to run deploy command from Netlify CLI. It will popup an authentication screen prior deploy.
