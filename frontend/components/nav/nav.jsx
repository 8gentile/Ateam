import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  render(){
    const teamIds = Object.keys(this.props.teams);
    const teams = teamIds.map( teamId => {
      return (
        <li key={teamId}>{ this.props.teams[teamId].name }</li>
      );
    });
    return (
      <ul className="team-nav">
        <li>
          <Link to={`/users/${this.props.currentUser.id}`} >Teams</Link>
        </li>
        {teams}
      </ul>
    );
  }
}

export default withRouter(Nav);
