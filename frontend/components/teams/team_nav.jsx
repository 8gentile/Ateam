import React from 'react';
import { withRouter, NavLink, Link } from 'react-router-dom';

const TeamNav = (props) => {
  return (
    <section className="team-nav-header">
      <Link to={`/teams/${props.team.id}`}><h1>{ props.team.name }</h1></Link>
      <ul>
          <NavLink to={`/teams/${props.team.id}/todos`} activeClassName="feature-active">
            <li>
              <h3>Todos</h3>
              <i className="fa fa-list-ul fa-2x" aria-hidden="true"></i>
            </li>
          </NavLink>
          <NavLink to={`/teams/${props.team.id}/posts`} activeClassName="feature-active">
            <li>
              <h3>Message Board</h3>
               <i className="fa fa-thumb-tack fa-2x" aria-hidden="true"></i>
           </li>
           </NavLink>
          <NavLink to={"#"} activeClassName="feature-active">
            <li>
              <h3>Schedule</h3>
              <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
            </li>
          </NavLink>
      </ul>
    </section>
  );
};

export default withRouter(TeamNav);

// Link to Schedule
// `/teams/${props.team.id}/events`