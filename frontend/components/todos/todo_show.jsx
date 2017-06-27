import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import TeamNav from '../teams/team_nav';
import ItemForm from './item_form_container';


class TodoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false,
    };

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

  render(){
    const { todo } = this.props;
    const { team } = this.props;
    if (!todo) return null;
    if (!team) return null;

    const listItems = Object.keys(todo.items).map( itemId => (
      <li key={itemId}>
        { todo.items[itemId].title }
      </li>
    ));

    return(
      <section className="todos-index-panel">
        <TeamNav
          team={this.props.team}
        />
        <section className="todos-form">
          <h1>{ this.props.todo.title }</h1>
          <ul>{ listItems }</ul>
          <div onClick={this.handleClick}>
            Add a to-do
          </div>
          {this.state.showForm ? <ItemForm todoId={this.props.todo.id}/> : <p></p> }
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
