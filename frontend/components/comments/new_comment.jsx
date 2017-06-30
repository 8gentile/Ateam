import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import ReactQuill from 'react-quill';

class NewComment extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      user_id: this.props.userId,
      [this.props.parentId]: this.props.parentId,
      body: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const post = merge({}, this.state);
    this.props.processForm(post)
      .then( this.props.fetchParent(this.props.parentId));
  }

  handleQuill(value) {
    this.setState({ body: value })
  }

  render() {
    const { users } = this.props;
    if (!users) return null;

    const  modules = {
      toolbar: [
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        [{ 'align': [] }], 
        ['clean']
      ],
    }



    return(
      <section className="new-comment-panel">
        <div className="new-comment-header">
        </div>
        <section>
          <div>
            <ReactQuill
              className="post-body"
              value={this.state.body}
              theme="snow"
              modules={modules}
              onChange={this.handleQuill}
              placeholder="Body" />
            <span className="new-comment-button">
              <button onClick={this.handleSubmit}>Add this comment</button>
            </span>
          </div>
        </section>
      </section>
    );
  }



}