
# PartySync front end

PartySync is a full-stack app that uses the Python-based Django REST Framework with a React.js frontend


# back end link
https://github.com/charlie-bedell/partysync-back-end

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Setting up your dev environment

## clone the repo
`git clone https://github.com/charlie-bedell/partysync-front-end.git`

## pull down the dev branch
`git pull dev`

## install dependencies
`npm i`

## spin up tailwind watcher
compiling tailwind with the --watch argument will update the css whenever there
is a change
`npx tailwindcss -i ./src/input.css -o ./src/output.css --watch`

## spin up the dev server
`npm run dev`
