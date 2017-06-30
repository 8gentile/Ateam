import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import ReactQuill from 'react-quill';

class PostEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount(){
    this.props.fetchPost(this.props.teamId, this.props.postId)
      .then(this.setState({
        id: this.props.postId,
        title: this.props.post.title,
        body: this.props.post.body,
        user_id: this.props.userId,
        team_id: this.props.teamId,
      })
    );
  }


  handleSubmit(e){
    e.preventDefault();
    const post = merge({}, this.state);
    this.props.processForm(post)
      .then( action => this.props.history.push(`/teams/${action.post.team_id}/posts/${action.post.id}`));
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

    const  modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        [{ 'align': [] }], 
        ['clean']
      ],
    }

    return(
      <section className="edit-post-panel">
        <Link to={`/teams/${team.id}`}>{team.name}</Link>
        <div>
          <span>←</span>
          <Link to={`/teams/${team.id}/posts/${post.id}`} className="nav-back"> Discard my changes</Link>
        </div>
        <div>
            <i className="fa fa-trash-o fa-2x" aria-hidden="true" onClick={this.handleRemove}></i>
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
            <button onClick={this.handleSubmit} className="update-post-button">Save changes</button>
        </div>
      </section>
    );
  }
}

export default withRouter(PostEdit);