import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PostNew extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			body: "",
      user_id: this.props.userId,
      team_id: this.props.teamId,
		}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}




	handleSubmit(e){
    e.preventDefault();
    const post = merge({}, this.state);
    this.props.processForm(post)
      .then( action => this.props.history.push(`/posts/${action.post.id}`));
  }

  handleChange(field){
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

	render() {
    const { team } = this.props;
    if (!team) return null;
		return(
			<section className="new-post-panel">
        <div>
          <span>←</span>
          <Link to={`/teams/${team.id}/posts`} className="nav-back"> Back to {team.name}'s Message Board</Link>
        </div>
        <section>

  				<div>
            <input
                  onChange={this.handleChange("title")}
                  value={this.state.title}
                  placeholder="Title"/>
            <textarea rows="6" cols="50"
                  onChange={this.handleChange("body")}
                  value={this.state.body}
                  placeholder="Body">
            </textarea>
            <button onClick={this.handleSubmit}>Post this message</button>
  				</div>
        </section>
			</section>
		);
	}
}

export default withRouter(PostNew);