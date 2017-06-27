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
    const { team } = this.props;
    if (!team) return null;

    if (todos.length) {
      const todoLists = todos.map( list => {
        return (
          <Link to={`/teams/${this.props.teamId}/todos/${list.id}`}>
            <li key={list.id}>
              { list.title }
            </li>
          </Link>
        );
      });      

      var listIndex = () => (
        <section className="todos-index">
          <ul>{todoLists}</ul>
        </section>
      );
    }


    return(
      <section className="todos-index-panel">
        <TeamNav
          team={this.props.team}
        />

        <section className="todos-form">
          <h1>To-dos</h1>
          <div onClick={this.handleClick}>
            <TodoFormButton
              numTodos={todos.length}
              />
          </div>

          {this.state.showForm ? <TodoForm teamId={this.props.team.id}/> : <main></main> }
        </section>
        { !todos.length ? <p></p> : listIndex() }
      </section>
    );
  }
}

export default withRouter(TodosIndex);
