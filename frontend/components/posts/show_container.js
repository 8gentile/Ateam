import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './show';
import { fetchPost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import allUsers from '../../reducers/selectors'

const mapStateToProps = ({ posts, teams, users, session }, { match }) => ({
  userId: session.currentUser.id,
  postId: match.params.postId,
  post: posts[match.params.postId],
  users: allUsers(users),
  team: teams.entities[posts[match.params.postId].team_id],
});

const mapDispatchToProps = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  fetchUsers: userId => dispatch(fetchUsers(userId)),
  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow));
