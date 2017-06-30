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
import TeamEdit from './teams/edit_team_container';
import TodosIndex from './todos/todos_index_container';
import TodoShow from './todos/todo_show_container';
import PostIndex from './posts/index_container';
import PostNew  from './posts/new_container';
import PostShow from './posts/show_container';
import PostEdit from './posts/edit_container';
import EventIndex from './events/index_container';


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
          <ProtectedRoute exact={true} path="/" component={ TeamsIndex } />
          <ProtectedRoute exact={true} path="/teams/:teamId" component={ TeamShow } />
          <ProtectedRoute path="/teams/:teamId/edit" component={ TeamEdit } />
          <ProtectedRoute exact={true} path="/teams/:teamId/todos" component={ TodosIndex } />
          <ProtectedRoute exact={true} path="/teams/:teamId/todos/:todoId" component={ TodoShow } />
          <ProtectedRoute exact={true} path="/teams/:teamId/posts" component={ PostIndex } />
          <ProtectedRoute exact={true} path="/teams/:teamId/posts/new" component={ PostNew } />
          <ProtectedRoute exact={true} path="/teams/:teamId/posts/:postId" component={ PostShow } />
          <ProtectedRoute exact={true} path="/teams/:teamId/posts/:postId/edit" component={ PostEdit } />
          <ProtectedRoute exact={true} path="/teams/:teamId/events" component={ EventIndex } />
        </section>
    </div>
  );
};

export default App;
