import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount(){
    this.props.fetchTeams(this.props.currentUser.id);
  }

  render(){
    const teamIds = Object.keys(this.props.teams);
    const teams = teamIds.map( teamId => {
      return (
        <li key={teamId}>
          <NavLink to={`/teams/${teamId}`} activeClassName="active">{ this.props.teams[teamId].name }</NavLink>
        </li>
      );
    });
    return (
      <ul className="team-nav">
        <li>
          <NavLink exact={true } to={`/`} activeClassName="active">Teams</NavLink>
        </li>
        {teams}
      </ul>
    );
  }
}

export default withRouter(Nav);
