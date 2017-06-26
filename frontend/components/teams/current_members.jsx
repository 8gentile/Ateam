import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';
import Member from './member.jsx';

export default class CurrentMembers extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { users } = this.props;
    const members = this.props.member_ids.map( id => {
      const member = users[id];
      return (
        <Member
          teamId={this.props.team.id}
          member={member} 
          removeMember={this.props.removeMember}
          key={id}
        />
      );
    });
    return(
      <ul className="members-list">
        {members}
      </ul>
    );
  }
}
