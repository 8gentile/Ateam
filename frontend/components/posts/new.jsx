import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import ReactQuill from 'react-quill';

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
    this.handleQuill = this.handleQuill.bind(this);
	}




	handleSubmit(e){
    e.preventDefault();
    const post = merge({}, this.state);
    this.props.processForm(post)
      .then( action => this.props.history
        .push(`/teams/${this.props.teamId}/posts/${action.post.id}`));
  }

  handleChange(field){
    return e => (
      this.setState({ [field]: e.currentTarget.value })
    );
  }

  handleQuill(value) {
    this.setState({ body: value })
  }

	render() {
    const { team } = this.props;
    if (!team) return null;

    const  modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        [{ 'align': [] }], 
        ['clean']
      ],
    }



		return(
			<section className="new-post-panel">
        <div className="new-post-header">
          <span>←</span>
          <Link to={`/teams/${team.id}/posts`} 
            className="nav-back"> Back to {team.name}'s Message Board</Link>
        </div>
        <section>
  				<div>
            <input
              onChange={this.handleChange("title")}
              value={this.state.title}
              placeholder="Title"/>
            <ReactQuill
              className="post-body"
              value={this.state.body}
              theme="snow"
              modules={modules}
              onChange={this.handleQuill}
              placeholder="Body" />
            <span className="new-post-button">
              <button onClick={this.handleSubmit}>Post this message</button>
            </span>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(PostNew);