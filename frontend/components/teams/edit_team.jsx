import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';
import AddMembersForm from './add_members_form';
import CurrentMembers from './current_members';

class TeamEdit extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchUsers(this.props.currentUser.id);
  }

  render(){
    const { team } = this.props;
    const { users } = this.props.users;
    if(!users) return null;
    if(!team) return null;


    const memberAvatars = team.member_avatars.map( (avatar_url, idx) => {
      return (<li key={idx}><img className="user-avatar"
                src={ avatar_url }/></li>);
    });
    const formTitle = "Setup who's on ";
    return (
      <section className="team-edit-panel">
        <div>
          <span>←</span><Link to={`/teams/${team.id}`} className="nav-back"> Back to {team.name}</Link>
        </div>
        <section className="team-edit-form">
            <h1 className="team-edit-title">{formTitle}<span>{team.name}</span></h1>
              <ul className="header-avatar-list">
                { memberAvatars }
              </ul>
            <p>Everyone you add below will be added to the team and will be able to collaborate with you (make to-dos, post messages, etc.)</p>
            <AddMembersForm
              team={team}
              users={users}
              processForm={this.props.addMember}
              errors={this.props.clearErrors}/>

            <section className="current-members">
              <h2>People already on the team</h2>
              <section className="members-list-panel">
                <CurrentMembers
                  team={team}
                  users={users}
                  member_ids={team.member_ids}
                  removeMember={this.props.removeMember} />
              </section>
            </section>
        </section>
      </section>
    );
  }
}


export default withRouter(TeamEdit);
