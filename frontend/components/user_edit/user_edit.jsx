import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

// no ability to change password

class UserEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      id: props.currentUser.id,
			email: props.currentUser.email,
      fname: props.currentUser.fname,
      lname: props.currentUser.lname,
			password: props.currentUser.password,
      imageFile: "",
      imageUrl: props.currentUser.avatar_url,
		};
    this.props.clearErrors();

    this.fullName = this.fullName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateFile = this.updateFile.bind(this);
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

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();

    formData.append("user[email]", this.state.email);
    formData.append("user[fname]", this.state.fname);
    formData.append("user[lname]", this.state.lname);
    formData.append("user[avatar]", this.state.imageFile);
    debugger
    this.props.processForm(formData, this.state.id);
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

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render(){

    return (
      <section className="sessionFormPanel">
        <form onSubmit={this.handleSubmit} className="sessionForm">
          <ul>
            <img src={this.state.imageUrl} className="avatar-big" />
            {this.errors()}
            <li>
              <h2>Hello there {this.fullName()}!</h2>
            </li>
            <li>
              <input type="file" onChange={ this.updateFile } />
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
              <input
                type="password"
                onChange={this.handleChange("password")}
                value={this.state.password} />
            </li>
            <li>
              <button className="CTAbutton" >Save Changes</button>
            </li>
          </ul>
        </form>
      </section>
    );
  }
}
export default withRouter(UserEdit);
