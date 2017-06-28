import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TeamNav from '../teams/team_nav';
import ItemForm from './item_form_container';
import merge from 'lodash/merge';

class TodoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
    };

    this.toggleDone = this.toggleDone.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.props.requestTodo(this.props.todoId, this.props.team.id);
  }

  componentWillReceiveProps(nextProps){
    const numOldItems = Object.keys(this.props.todo.items).length;
    const numNewItems = Object.keys(nextProps.todo.items).length;
    if ( numOldItems < numNewItems ) {
      this.setState({ showForm: true })
    };
  }

  handleClick(e){
    if (this.state.showForm) {
      this.setState({showForm: false});
    } else {
      this.setState({showForm: true});
    }
  }

  toggleDone(item) {
    return (e) => {
      e.preventDefault();
      if (!item.done) {
        const doneItem = merge({}, item, { done: true });
        this.props.updateItem(doneItem);
      } else {
        const undoneItem = merge({}, item, { done: false });
        this.props.updateItem(undoneItem);
      }
    };
  }

  render(){
    const { todo } = this.props;
    const { team } = this.props;
    if (!todo) return null;
    if (!team) return null;

    const pendingItems = todo.items.map( item => {
      if (!item.done) {
        return (
          <li key={item.id}>
            <button onClick={this.toggleDone(item)}>
              <i className="fa fa-circle-thin" aria-hidden="true"></i>
            </button>
            { item.title }
          </li>
        );
      }
    });

    const finishedItems = todo.items.map( item => {
      if (item.done) {
        return (
          <li key={item.id}>
            <button onClick={this.toggleDone(item)}>
              <i className="fa fa-check-circle" aria-hidden="true"></i>
            </button>
            { item.title }
          </li>
        );
      }
    });

    return(
      <section className="todos-index-panel">
        <TeamNav
          team={this.props.team}
        />
        <section className="todos-form">
          <h1>{ this.props.todo.title }</h1>
          <ul>{ pendingItems }</ul>
          <div onClick={this.handleClick}>
            Add a to-do
          </div>
          {this.state.showForm ? <ItemForm todoId={this.props.todo.id}/> : <p></p> }
          <ul>{ finishedItems }</ul>
        </section>

        <section className="todos-index">
        </section>
      </section>
    );
  }
}

export default withRouter(TodoShow);

// const todoLists = todos.map( list => {
//   return (
//     <li key={list.id}>
//       <Link to={`/todos/${list.id}`}>{ list.title }</Link>
//     </li>
//   );
// });

// <ul>{todoLists}</ul>
