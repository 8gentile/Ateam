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
    let items = false;
    let listItems = [];

    if (todos.length) {
      const todoLists = todos.map( list => {
        if (list.items) {
          items = true;
          listItems = list.items.map( item => {
            if (!item.done) {
              return (
                <li key={item.id}>
                  <i className="fa fa-circle-thin" aria-hidden="true"></i>
                  <span>{ item.title }</span>
                </li>
              );
            } else {
              return (
                <li key={item.id}>
                  <i className="fa fa-check-circle" aria-hidden="true"></i>
                  <span>{ item.title }</span>
                </li>
              );
            }
          });
        }

        return (
          <Link to={`/teams/${this.props.teamId}/todos/${list.id}`} key={list.id}>
            <li className="list-card">
              <h4>{ list.title }</h4>
              <ul>{items ? listItems.slice(0, 6) : <li></li>}</ul>
            </li>
          </Link>
        );
      });      
      listItems = [];
      items = false;
      var listIndex = () => (
        <section className="todos-index">
          <ul className="card-holder">{todoLists}</ul>
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
          { !todos.length ? <p></p> : listIndex() }
        </section>
      </section>
    );
  }
}

export default withRouter(TodosIndex);
