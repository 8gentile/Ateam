import React from 'react';
import merge from 'lodash/merge';
import { withRouter, Link } from 'react-router-dom';

class TeamsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addTeamFormVisible: false,
      team: {
        name: "",
      }
    };
    this.props.clearErrors();

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    if (!this.state.addTeamFormVisible) {
      this.setState({ addTeamFormVisible: true });
    } else {
      this.setState({ addTeamFormVisible: false });
    }
  }

  handleChange(field){
    return e => {
      this.setState({ team: { [field]: e.currentTarget.value } });
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const team = merge({}, this.state.team);
    team.manager_id = this.props.currentUser.id;
    this.props.createTeam(team)
      .then( action => this.props.history.push("/"));
  }

  componentDidMount(){
    this.props.fetchTeams(this.props.currentUser.id);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.teams === nextProps.teams) {
  //     this.props.fetchTeams(this.props.currentUser.id);
  //   }
  // }

  render(){

    if(!this.props.teams) return null;
    // if(!this.props.users.empty) return null;
    const toggleButtonCard = () => {
      if (!this.state.addTeamFormVisible) {
        return (
          <li className="team-button-card-false">
            <button onClick={this.handleClick}>
              <span>+</span><p>New</p>
            </button>
          </li>
        );
      } else {
        return (
          <li className="team-button-card-true">
            <form onSubmit={this.handleSubmit}>
              <input
                className="button-card-input"
                onChange={this.handleChange("name")}
                value={this.state.team.name}
                placeholder="Name this team"
              />
              <section>
                <button type="button-card-submit">
                  <span>Save</span>
                </button>
                <button onClick={this.handleClick}>
                <span className="button-card-cancel">Cancel</span>
                </button>
              </section>
            </form>
          </li>
        );
      }
    };

    function isEmpty(obj) {
      for(var key in obj) {
          if(obj.hasOwnProperty(key))
              return false;
      }
      return true;
    }
    if (isEmpty(this.props.teams)) {

      return (
        <section className="team-index-container">
          <section className="team-index-panel">
            <h1 className="panel-header">{this.props.currentUser.email}</h1>

          </section>
          <section className="team-index-panel">
            <h1 className="panel-header">Teams</h1>
            <ul className="team-index">
              {toggleButtonCard()}
            </ul>
          </section>
        </section>
      );
    } else {
      const teamIds = Object.keys(this.props.teams);
      const that = this;
      const teams = teamIds.map( teamId => {
        const avatarUrls = this.props.teams[teamId].member_avatars;
        const memberAvatars = avatarUrls.map( (avatar_url, idx) => {
        return (<li key={idx}><img className="user-avatar"
                  src={ avatar_url }/></li>);
        });
        return (
          <Link to={`/teams/${teamId}`} key={teamId}>
            <li  className="team-card" key={teamId}>
              <ul className="team-card-contents">
                <li>
                  <h2 className="card-header">{ this.props.teams[teamId].name }</h2>
                </li>
                <li>
                  <ul className="team-avatars">
                    { memberAvatars }
                  </ul>
                </li>
              </ul>
            </li>
          </Link>
        );
      });

      return (
        <section className="team-index-container">
          <section className="team-index-panel">
            <h1 className="panel-header">{this.props.currentUser.email}</h1>

          </section>
          <section className="team-index-panel">
            <h1 className="panel-header">Teams</h1>
            <ul className="team-index">
              {teams}
              {toggleButtonCard()}
            </ul>
          </section>
        </section>
      );
    }
  }
}


export default withRouter(TeamsIndex);
