import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const thingToDisplay = () => {
    if (currentUser) {
      return (
        <ul className="authNav">
          <li>
            <span>Logged in as: { currentUser.email }</span>
          </li>
          <li>
            <button onClick={ logout } className="authButton">Log Out</button>
          </li>
        </ul>
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
};

export default Greeting;
