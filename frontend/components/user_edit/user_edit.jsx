import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

class UserEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: props.currentUser.email,
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
			password: props.currentUser.password
		};
    this.props.clearErrors();

    this.fullName = this.fullName.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleClick(e){
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
              <h2>Hello there {this.fullName()}!</h2>
            </li>
            <li>
              <span>Please signup, <Link to="/login"> or login instead</Link></span>
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
              <label>First Name</label>
            </li>
            <li>
              <input
                onChange={this.handleChange("fname")}
                value={this.state.fname}
                placeholder="Peter"/>
            </li>

            <li className="inputLabel">
              <label>Last Name</label>
            </li>
            <li>
              <input
                onChange={this.handleChange("lname")}
                value={this.state.lname}
                placeholder="Davidson"/>
            </li>

            <li className="inputLabel">
              <label>Password</label>
            </li>
            <li>
              <input type="password"
                onChange={this.handleChange("password")}
                value={this.state.password} />
            </li>
            <li onClick={this.handleClick}>
              <h3 className="CTAbutton"><label>Save my changes</label></h3>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
export default withRouter(UserEdit);
