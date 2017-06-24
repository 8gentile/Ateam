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

    const memberAvatars = team.member_avatars.map( (avatar_url, idx) => {
      return (<li key={idx}><img className="user-avatar" 
                src={ avatar_url }/></li>);
    });

    return (
      <section className="team-show-panel">
        <div className="team-show-header">
          <h1 className="team-show-title">{team.name}</h1>
          <section className="under-title">
            <ul className="header-avatar-list">
              { memberAvatars }
            </ul>
            <Link to="#" className="edit-members-link"> Add/remove people...</Link>
          </section>
        </div>
      </section>
    );
  }
}


export default withRouter(TeamShow);
