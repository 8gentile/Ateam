import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../utils/route_util.jsx';
import Nav from './nav/nav_container';
import SessionForm from './session_form_container';
import SignupForm from './signup_form_container';
import Greeting from './greeting_container';
import UserEdit from './user_edit/user_edit_container';
import TeamsIndex from './teams/teams_index_container';
import TeamShow from './teams/show_team_container';

const App = () => {
  return (
    <div>
      <header className="header">
        <div className="header-items">
          <h1 className="logo">Äteam</h1>
          <ProtectedRoute path="/" component={ Nav } />
          <Greeting />
        </div>
      </header>
        <section className="bodySection">
          <AuthRoute exact={true} path="/login" component={ SessionForm } />
          <AuthRoute exact={true} path="/signup" component={ SignupForm } />
          <ProtectedRoute path="/users/:userId/edit" component={ UserEdit } />
          <ProtectedRoute exact={true} path="/users/:userId" component={ TeamsIndex } />
          <ProtectedRoute path="/teams/:teamId" component={ TeamShow } />
        </section>
    </div>
  );
};

export default App;
