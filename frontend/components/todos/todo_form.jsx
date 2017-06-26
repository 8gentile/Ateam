import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
      body: "",
      user_id: this.props.user_id,
      team_id: this.props.teamId,
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const list = merge({}, this.state);
    this.props.processForm(list);
      // .then( action => this.props.history.push(`/teams/${this.props.teamId}/todos`));
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  render(){

    return (
      <section className="todo-form-panel">
        <form onSubmit={this.handleSubmit} className="todo-form">
              <input
                onChange={this.handleChange("title")}
                value={this.state.title}
                placeholder="Title"/>
              <input
                onChange={this.handleChange("body")}
                value={this.state.body}
                placeholder="Body"/>
              <button className="CTAbutton">Add this list</button>
        </form>
      </section>
    );
  }
}
export default withRouter(TodoForm);
