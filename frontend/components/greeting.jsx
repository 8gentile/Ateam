import React from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from './user_dropdown/user_dropdown_container';

export default class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdown: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.fullName = this.fullName.bind(this);
  }

  fullName(){
    let name = "";
    name += this.props.currentUser.fname[0].toUpperCase();
    name += this.props.currentUser.fname.slice(1);
    name += " ";
    name += this.props.currentUser.lname[0].toUpperCase();
    name += this.props.currentUser.lname.slice(1);
    return name;
  }

  toggleDropdown(){
    // is false
    if (!this.state.dropdown) {
      this.setState({ dropdown: true });
    } else {
      this.setState({ dropdown: false });
    }
  }

  handleClick(e){
    e.preventDefault(e);
    this.toggleDropdown();
  }

  render(){
    const thingToDisplay = () => {
      if (this.props.currentUser) {
        return (
          <nav>
            <button onClick={this.handleClick}>
              <img src={this.props.currentUser.avatar_url} className="user-avatar"/>
            </button>
            {this.state.dropdown ? <UserDropDown /> : <div className="hidden-dd"></div> }
          </nav>
        );
      } else {
        return (
          <ul className="authNav">
            <li>
              <Link to='/signup'>
                <span className="authButton">Sign Up</span>
              </Link>
            </li>
            <li>
              <Link to='/login'>
                <span className="authButton">Log In</span>
              </Link>
            </li>
          </ul>
        );
      }
    };

    return thingToDisplay();
  }
}
