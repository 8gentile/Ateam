import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';
import ReactQuill from 'react-quill';

export default class NewComment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userId: this.props.userId,
      typeId: this.props.typeId,
      type: this.props.type,
      body: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuill = this.handleQuill.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const comment = merge({}, this.state);
    this.props.processForm(comment)
      .then( this.setState({ body: "" }));
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
        <div className="new-comment-avatar">
          <img src={users[0][this.props.userId].avatar_url} className="avatar-medium"/>
        </div>
        <section>
          <div>
            <ReactQuill
              className="comment-body"
              value={this.state.body}
              theme="snow"
              modules={modules}
              onChange={this.handleQuill}
              placeholder="What are your thoughts?" />
            <span className="new-comment-button">
              <button onClick={this.handleSubmit}>Add this comment</button>
            </span>
          </div>
        </section>
      </section>
    );
  }
}