import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const TeamNav = (props) => {
  return (
    <section className="team-nav">
      <h1>{ props.team.name }</h1>
        <ul>
          <li>
            <Link to={`/teams/${props.team.id}/todos`}>Todos</Link>
          </li>
          <li>
            <Link to={`/teams/${props.team.id}/board`}>Message Board</Link>
          </li>
          <li>
            <Link to={`/teams/${props.team.id}/schedule`}>Schedule</Link>
          </li>
      </ul>
    </section>
  );
};

export default withRouter(TeamNav);
