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
          return (<li key={error}>{error}</li>);
        })
      );
    }
  }

  render(){
    const RedirectLink = () => {
      if (this.props.formType === '/login') {
        return (
          <span>Please login, <Link to="/signup"> or signup instead</Link></span>
        );
      } else {
        return (
          <span>Please signup, <Link to="/login"> or login instead</Link></span>
        );
      }
    };

    return (
      <section className="sessionFormPanel">
        <form onSubmit={this.handleSubmit} className="sessionForm">
          <ul>
            <li>
              <h2>Welcome to Äteam!</h2>
            </li>
            <li>
              <RedirectLink />
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
              <button className="CTAbutton">Submit</button>
            </li>
          </ul>
            {this.errors()}
        </form>
      </section>
    );
  }
}
export default withRouter(SessionForm);
