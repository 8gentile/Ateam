import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = ({ posts, teams, session }, { match }) => ({
  userId: session.currentUser.id,
  postId: match.params.postId,
  post: posts[match.params.postId],
  team: teams.entities[posts[match.params.postId].team_id],
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchTeam: teamId => dispatch(fetchTeam(teamId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow));
