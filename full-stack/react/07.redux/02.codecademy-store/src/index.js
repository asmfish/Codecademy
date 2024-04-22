
//Entry point for the app, it loaded by the index.html, index.js is responsible for rendering top level <APP/>
//componemt
//but the app needs data from the store
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App.js';
// Import the store here.
import { store } from './app/store.js';

const root = createRoot(document.getElementById('root'));

// Pass state and dispatch props to the <App /> component.
//data is passed to presentational components via the <App /> component
//presentational components will need to access the current state of the store to render the most up-to-date data.
//they will also need to access store.dispatch in order to request new data when user interacts with the app
const render = () => {
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />)
};
render();

// Subscribe render to the store.
//If the store state is chnaged from any part of our application the render() method is called, which results in re-render.
store.subscribe(render);