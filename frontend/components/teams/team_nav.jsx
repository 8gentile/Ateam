import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const TeamNav = (props) => {
  return (
    <section className="team-nav-header">
      <Link to={`/teams/${props.team.id}`}><h1>{ props.team.name }</h1></Link>
      <ul>
          <Link to={`/teams/${props.team.id}/todos`}>
            <li>
              <h3>Todos</h3>
              <i className="fa fa-list-ul fa-2x" aria-hidden="true"></i>
            </li>
          </Link>
          <Link to={`/teams/${props.team.id}/board`}>
            <li>
              <h3>Message Board</h3>
               <i className="fa fa-thumb-tack fa-2x" aria-hidden="true"></i>
           </li>
           </Link>
          <Link to={`/teams/${props.team.id}/schedule`}>
            <li>
              <h3>Schedule</h3>
              <i className="fa fa-calendar fa-2x" aria-hidden="true"></i>
            </li>
          </Link>
      </ul>
    </section>
  );
};

export default withRouter(TeamNav);
