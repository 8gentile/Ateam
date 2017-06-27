import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';
import TeamNav from '../teams/team_nav';
import TodoFormButton from './todo_form_button';
import TodoForm from './todo_form_container';

class TodosIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.requestTodos(this.props.teamId);
  }

  handleClick(e){
    if (this.state.showForm) {
      this.setState({showForm: false});
    } else {
      this.setState({showForm: true});
    }
  }

  render(){
    const { todos } = this.props;
    if (!todos.length) return null;

    const todoLists = todos.map( list => {
      return (
        <li key={list.id}>
          <Link to={`/teams/${this.props.teamId}/todos/${list.id}`}>{ list.title }</Link>
        </li>
      );
    });

    return(
      <section className="todos-index-panel">
        <TeamNav
          team={this.props.team}
        />

        <section className="todos-form">
          <div onClick={this.handleClick}>
            <TodoFormButton
              numTodos={todos.length}
              />
          </div>

          {this.state.showForm ? <TodoForm teamId={this.props.team.id}/> : <div></div> }
        </section>

        <section className="todos-index">
          <ul>{todoLists}</ul>
        </section>
      </section>
    );
  }
}

export default withRouter(TodosIndex);
