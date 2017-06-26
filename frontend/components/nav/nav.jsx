import React from 'react';
import { withRouter, Link } from 'react-router-dom';

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
        <li key={teamId}><Link to={`/teams/${teamId}`}>{ this.props.teams[teamId].name }</Link></li>
      );
    });
    return (
      <ul className="team-nav">
        <li>
          <Link to={`/`} >Teams</Link>
        </li>
        {teams}
      </ul>
    );
  }
}

export default withRouter(Nav);
