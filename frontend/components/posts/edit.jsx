import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.post.id,
      title: this.props.post.title,
      body: this.props.post.body,
      user_id: this.props.userId,
      team_id: this.props.teamId,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount(){
    this.props.fetchPost(this.props.postId);
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

  handleRemove(e){
    e.preventDefault();
    this.props.destroyPost(this.props.postId)
      .then(this.props.history.push(`/teams/${this.props.teamId}/posts`));
  }

  render() {
    const { team } = this.props;
    const { post } = this.props;
    if (!post) return null;
    if (!team) return null;

    return(
      <section className="edit-post-panel">
        <Link to={`/teams/${team.id}`}>{team.name}</Link>
        <div>
          <span>←</span>
          <Link to={`/posts/${post.id}`} className="nav-back"> Discard my changes</Link>
        </div>
        <div>
            <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={this.handleRemove}></i>
            <input
                  onChange={this.handleChange("title")}
                  value={this.state.title}
                  placeholder="Title"/>
            <textarea rows="6" cols="50"
                  onChange={this.handleChange("body")}
                  value={this.state.body}
                  placeholder="Body">
            </textarea>
            <button onClick={this.handleSubmit} className="update-post-button">Save changes</button>
        </div>
      </section>
    );
  }
}

export default withRouter(PostEdit);