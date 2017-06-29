import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TeamNav from '../teams/team_nav';

class PostShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId)
      .then(this.props.fetchUsers(this.props.userId));
  }


  render(){
    const { post } = this.props;
    const { team } = this.props;
    const { users } = this.props;
    if (!post) return null;
    if (!team) return null;
    if (!users.length) return null;

    const comments = post.comments.map( comment => {
      return(
        <li className="comment-item" key={comment.id}>
            <img src={users[0][comment.user_id].avatar_url} className="avatar-medium"/>
            <section>
              <span><strong>{users[0][comment.user_id].fname} {users[0][comment.user_id].lname}</strong>, {users[0][comment.user_id].email}</span>
              <p>{comment.body}</p>
            </section>
        </li>
      );
    });

    return(
      <section className="post-show-panel">
        <TeamNav
          team={this.props.team}
        />
        <section className="post-show">
          <img src={post.author.avatar_url} className="avatar-big"/>
          <span>Posted by {post.author.fname} {post.author.lname}</span>
          <Link to={`/teams/${team.id}/posts/${post.id}/edit`}>Edit</Link>
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </section>
        <section className="comments">
          <ul>{ comments }</ul>
        </section>
      </section>
    );
  }
}

export default withRouter(PostShow);



          // <Link to={`/teams/${this.props.teamId}/posts/new`}><span>Post a message</span></Link>

          
          // <ul>{ postItems }</ul>
          
    // const postItems = posts.map( post => {
    //   return (
    //     <li className="post-item" key={post.id}>
    //       <Link to=`/posts/${post.id}`>
    //         <img src={post.author.avatar_url} className="avatar-medium"/>
    //         <div>
    //           <section>
    //             <p>{post.title}</p>
    //             <i className="fa fa-comments" aria-hidden="true">{post.comments.length}</i>
    //           </section>
    //           <span>by {post.author.fname} {post.author.lname}</span>
    //         </div>
    //       </Link>
    //     </li>
    //   );
    // });