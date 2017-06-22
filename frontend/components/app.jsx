import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import SessionForm from './session_form_container';
import SignupForm from './signup_form_container';
import Greeting from './greeting_container';
import UserEdit from './user_edit/user_edit_container';

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="header-items">
          <h1 className="logo">Äteam</h1>
          <Greeting />
        </div>
      </header>
        <section className="bodySection">
          <AuthRoute exact path="/login" component={ SessionForm } />
          <AuthRoute exact path="/signup" component={ SignupForm } />
          <ProtectedRoute exact path="/users/:userId/edit" component={ UserEdit } />
        </section>
    </div>
  );
};

export default App;
