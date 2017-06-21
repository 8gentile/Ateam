import React from 'react';
import { Link, hashHistory } from 'react-router';


export default class UserDropDown extends React.Component {
  constructor (props){
    super(props);

    this.fullName = this.fullName.bind(this);
    // this.updateFile = this.updateFile.bind(this);
    // this.redirectToProfile = this.redirectToProfile.bind(this);
    // this.redirectToEdit = this.redirectToEdit.bind(this);
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


  render() {
    return (
      <div className="user-dropdown">
        <ul>
          <li>{this.fullName()}</li>
          <li onClick={this.props.logout}>Log Out</li>
        </ul>
      </div>
    );
  }

}

// <li>
//   <Link to="/useredit">User Settings</Link>
// </li>
// for user edit page
// <input type="file" onChange={this.updateFile}/>

// implement later
// <li onClick={this.redirectToProfile}>My Profile</li>

// redirectToProfile () {
//   hashHistory.push('/users/' + this.props.currentUser.id);
// }
//
// redirectToEdit () {
//   hashHistory.push('/users/' + this.props.currentUser.id + '/edit');
// }

// updateFile(e){
//   const file = e.currentTarget.files[0];
//   const fileReader = new FileReader();
//   fileReader.onloadend = () => {
//     this.setState({imageFile: file, imageUrl: fileReader.result});
//   };
//   if (file) {
//     fileReader.readAsDataURL(file);
//   }
// }
