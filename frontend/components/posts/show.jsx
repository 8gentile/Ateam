import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TeamNav from '../teams/team_nav';

class PostIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    this.props.fetchPost(this.props.postId)
      .then(this.props.fetchTeam(this.props.post.team_id));
  }


  render(){
    const { post } = this.props;
    const { team } = this.props;
    if (!post) return null;
    if (!team) return null;


    return(
      <section className="board-panel">
        <TeamNav
          team={this.props.team}
        />
        <section className="post-index">
          <h1>{post.title}</h1>
        </section>
      </section>
    );
  }
}

export default withRouter(PostIndex);

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