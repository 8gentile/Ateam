import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TeamNav from '../teams/team_nav';

class PostIndex extends React.Component {
	constructor(props){
		super(props);

	}

	componentDidMount() {
		this.props.fetchPosts(this.props.teamId);
	}


	render(){
		const { posts } = this.props;
		const { team } = this.props;
		if (!posts) return null;
    if (!team) return null;

		const postItems = posts.map( post => {
			return (
				<li className="post-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						<img src={post.author.avatar_url} className="avatar-medium"/>
						<div>
							<section>
								<p>{post.title}</p>
								<i className="fa fa-comments" aria-hidden="true">{post.comments.length}</i>
							</section>
							<span>by {post.author.fname} {post.author.lname}</span>
						</div>
					</Link>
				</li>
			);
		});

		return(
			<section className="board-panel">
				<TeamNav
          team={this.props.team}
        />
        <section className="post-index">
					<h1>Message Board</h1>
					<Link to={`/teams/${this.props.teamId}/posts/new`}><span className="post-message-button">Post a message</span></Link>
					<ul>{ postItems }</ul>
        </section>
			</section>
		);
	}
}




export default withRouter(PostIndex);