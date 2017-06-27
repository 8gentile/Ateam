import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

class AddMembersForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      team_id: this.props.team.id,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const member = merge({}, this.state);
    this.props.processForm({ member })
      .then( action => this.setState({email: ""}));
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }


  render(){
    const { team } = this.props;
    return (
      <section className="">
        <form onSubmit={this.handleSubmit} className="">
          <ul>
            <li>
              <h3>Add a person to {team.name} by email</h3>
            </li>

            <li className="member-input-panel">
              <label>
                <input
                  onChange={this.handleChange("email")}
                  value={this.state.email}
                  placeholder="Email"/>
              </label>
            </li>
            <li>
              <button className="CTAbutton">Add Member</button>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
export default withRouter(AddMembersForm);
