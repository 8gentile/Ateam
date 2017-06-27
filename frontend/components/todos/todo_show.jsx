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

    return(
      <section className="todos-index-panel">
        <TeamNav
          team={this.props.team}
        />

        <section className="todos-form">
          <button onClick={this.handleClick}>
            Add a to-do
          </button>
          {this.state.showForm ? <ItemForm todoId={this.props.todo.id}/> : <div></div> }
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
