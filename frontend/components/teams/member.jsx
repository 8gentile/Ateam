import React from 'react';

export default class Member extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdown: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  toggleDropdown(){
    if (!this.state.dropdown) {
      this.setState({ dropdown: true });
    } else {
      this.setState({ dropdown: false });
    }
  }

  handleClick(e){
    e.preventDefault(e);
    this.toggleDropdown();
  }

  handleRemove(e){
    e.preventDefault(e);
    this.props.removeMember(this.props.member.id, this.props.teamId)
      .then(action => this.props.history.push(`/teams/${this.props.teamId}/edit`));
  }

  render(){
    const { member } = this.props;

    const removeToggle = () => (
      <section className="remove-member-menu">
        <p>Remove {member.fname} from the team?</p>
        <section>
          <button onClick={this.handleRemove} className="member-remove-button">Yes</button>
          or
          <span onClick={this.toggleDropdown} className="remove-member-toggle-off">No</span>
        </section>
      </section>
    );


    return(
      <li className="member-item-panel" key={member.id}>
        <section className="member-item">
          <section className="member-item-avatar">
            <img src={member.avatar_url} className="avatar-medium"/>
          </section>
          <section className="member-item-info">
            <span>{member.fname} {member.lname}</span>
            <p>{member.email}</p>
          </section>
        </section>
        <section>
          { this.state.dropdown ? removeToggle()  : <span onClick={this.handleClick} className="remove-member-toggle">
              Remove
            </span> }
        </section>
      </li>
    );
  }
}
