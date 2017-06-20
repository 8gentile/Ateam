import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../utils/route_util.jsx';
import SessionForm from './session_form_container';
import Greeting from './greeting_container';

const App = () => {
  return (
    <div>
      <header className="header">
        <h1 className="logo">Äteam</h1>
        <Greeting />
      </header>
      <section className="bodySection">
        <AuthRoute exact path="/login" component={ SessionForm } />
        <AuthRoute exact path="/signup" component={ SessionForm } />
      </section>
    </div>
  );
};

export default App;
