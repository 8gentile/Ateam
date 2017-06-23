import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';


class TeamShow extends React.Component {
  constructor(props){
    super(props);

    this.props.clearErrors();
  }

  componentDidMount(){
    // currentTeam = match;
    this.props.fetchTeam(this.props.currentUser.id);
  }

  render(){
    return (
      <h1>Howdy from a team show page!</h1>
    );
  }
}


export default withRouter(TeamShow);
