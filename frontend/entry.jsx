import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';

///// testing imports
import { fetchTeams, createTeam } from './actions/user_actions';
/////

document.addEventListener('DOMContentLoaded', () => {

let store;
if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}

//Window Testing Area
window.dispatch = store.dispatch;
window.getState = store.getState;
//////////////////// temp tests
window.fetchTeams = fetchTeams;
window.createTeam = createTeam;
////////////////////

const root = document.getElementById('root');
ReactDOM.render(<Root store={store} />, root);
});
