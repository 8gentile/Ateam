import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';


class TeamShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchTeams(this.props.currentUser.id);
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
              <Link to={`/teams/${team.id}/edit`}
                className="edit-members-link"> Add/remove people...</Link>
            </section>
        </div>
        <section className="team-show-nav-panel">
          <ul className="team-show-nav">
            <Link to={`/teams/${this.props.team.id}/todos`}>
              <li>
                <h2>To-dos</h2>
                <i className="fa fa-list-ul fa-5x" aria-hidden="true"></i>
                <p>Make lists of work that needs to get done.</p>
              </li>
            </Link>

            <Link to={`/teams/${this.props.team.id}/posts`}>
              <li>
                <h2>Message Board</h2>
                <i className="fa fa-thumb-tack fa-5x" aria-hidden="true"></i>
                <p>Post announcements, pitch ideas, progress updates etc.</p>
              </li>
            </Link>
            <Link to={"#"}>
              <li>
                <h2>Schedule</h2>
                <i className="fa fa-calendar fa-5x" aria-hidden="true"></i>
                <p>Set important dates on a shared schedule.</p>
              </li>
            </Link>
          </ul>
        </section>
      </section>
    );
  }
}


export default withRouter(TeamShow);

// link to schedule
// `/teams/${this.props.team.id}/events`
