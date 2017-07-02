import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostEdit from './edit';
import { updatePost, destroyPost, fetchPost } from '../../actions/post_actions';

const mapStateToProps = ({ teams, posts, session }, { match }) => ({
  userId: session.currentUser.id,
  teamId: match.params.teamId,
  postId: match.params.postId,
  team: teams.entities[match.params.teamId],
  post: posts[match.params.postId],
});

const mapDispatchToProps = dispatch => ({
  fetchPost: (teamId, postId) => dispatch(fetchPost(teamId, postId)),
  destroyPost: postId => dispatch(destroyPost(postId)),
  processForm: post => dispatch(updatePost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit));





