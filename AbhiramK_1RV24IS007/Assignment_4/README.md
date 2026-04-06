# My Productivity App

A small, focused productivity app that helps you keep a short task list and pick one item to concentrate on. The UI is a clean single-page layout with two routes: a task dashboard and a focus mode screen.

## Features

- Create tasks with a priority (High, Normal, Low)
- Mark tasks complete and remove them
- Focus Mode selects one pending task at random
- Tasks persist in browser Local Storage

## Tech stack

- React 19 + TypeScript
- Vite
- React Router
- CSS (custom styles, no framework)

## Getting started

```bash
npm install
npm run dev
```

Open the local dev server URL shown in the terminal.

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - typecheck and build
- `npm run preview` - preview the production build
- `npm run lint` - run ESLint

## Project structure

- `index.html` - app shell
- `src/main.tsx` - entry point
- `src/App.tsx` - router and layout
- `Dashboard.jsx` - task list view
- `FocusMode.jsx` - focus mode view
- `src/index.css` - global styles

## Data persistence

Tasks are stored in Local Storage under the key `simple_tasks`.
