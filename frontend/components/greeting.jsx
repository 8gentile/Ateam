import React from 'react';
import { Link } from 'react-router-dom';
import UserDropDown from './user_dropdown/user_dropdown_container';

export default class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dropdown: false,
    };

    this.guestClick = this.guestClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(){
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

  guestClick(e){
    e.preventDefault();
    this.props.guestLogIn();
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
            {this.state.dropdown ? <div onClick={this.handleClick} className="close-dropdown"></div> : <div className="hidden-dd"></div> }
          </nav>
        );
      } else {
        return (
          <ul className="authNav">
            <li className="guest-button">
              <span className="authButton" onClick={ this.guestClick }>Guests</span>
            </li>
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
