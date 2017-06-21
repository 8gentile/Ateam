import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: ""
		};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user)
      .then( action => this.props.history.push("/"));
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  errors(){
    if (this.props.errors) {
      return (
        this.props.errors.map( error => {
          return (<p key={error}>{error}</p>);
        })
      );
    }
  }

  render(){

    return (
      <section className="sessionFormPanel">
        <form onSubmit={this.handleSubmit} className="sessionForm">
          <ul>
            {this.errors()}
            <li>
              <h2>Login to Äteam!</h2>
            </li>
            <li>
              <span>Please login, <Link to="/signup"> or signup instead</Link></span>
            </li>
            <li className="inputLabel">
              <label>Email</label>
            </li>
            <li>
              <input
                onChange={this.handleChange("email")}
                value={this.state.email}
                placeholder="peter@docreader.com"/>
            </li>
            <li className="inputLabel">
              <label>Password</label>
            </li>
            <li>
              <input type="password"
                onChange={this.handleChange("password")}
                value={this.state.password} />
            </li>
            <li>
              <button className="CTAbutton">Log In </button>
            </li>
          </ul>

        </form>
      </section>
    );
  }
}
export default withRouter(SessionForm);
