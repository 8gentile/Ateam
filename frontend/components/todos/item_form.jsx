import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      todo_id: this.props.todoId,
    };

   // teamId: this.props.team_id,


    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const item = merge({}, this.state);
    this.props.processForm(item)
      .then( this.setState( { title: ""}));
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
              <button className="CTAbutton">Add this item</button>
        </form>
      </section>
    );
  }
}
export default withRouter(ItemForm);
