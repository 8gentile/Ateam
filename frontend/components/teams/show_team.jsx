import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';


class TeamShow extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  componentDidMount(){
    // this.props.clearErrors();
    this.props.fetchTeam(this.props.match.params.teamId);
  }

  render(){
    const { team } = this.props;
    if(!team) return null;
    return (
      <section className="team-show-panel">
        <div className="team-show-header">
          <h1>{team[this.props.match.params.teamId].name}</h1>

        </div>

      </section>
    );
  }
}


export default withRouter(TeamShow);
