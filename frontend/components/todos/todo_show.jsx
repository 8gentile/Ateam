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
    this.removeItem = this.removeItem.bind(this);
    this.removeList = this.removeList.bind(this);
  }

  componentDidMount(){
    this.props.requestTodo(this.props.todoId, this.props.teamId);
  }

  componentWillReceiveProps(nextProps){
    if (!this.props.todo) return null;
    if (!nextProps.todo) return null;

    const numOldItems = this.props.todo.items.length;
    const numNewItems = nextProps.todo.items.length;
    if ( numOldItems !== numNewItems ) {
      this.setState({ showForm: true });
    }
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

  removeItem(itemId){
    return (e) => {
      e.preventDefault();
      this.props.destroyItem(itemId);
    };
  }

  removeList(todoId) {
    return (e) => {
      e.preventDefault();
      this.props.destroyTodo(todoId)
        .then(this.props.history.push(`/teams/${this.props.team.id}/todos`));
    }
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
            <span>{ item.title }</span>
            <button onClick={this.removeItem(item.id)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
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
            <span>{ item.title }</span>
            <button onClick={this.removeItem(item.id)}>
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
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
          <h1 className="list-title">{ this.props.todo.title }
            <i className="fa fa-trash-o" aria-hidden="true" 
              onClick={this.removeList(todo.id)}></i>
          </h1>

          <ul className="icons-items">{ pendingItems }</ul>
          <div onClick={this.handleClick}>
            Add a to-do
          </div>
          {this.state.showForm ? <ItemForm todoId={this.props.todo.id}/> : <p></p> }
          <ul className="icons-items">{ finishedItems }</ul>
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
