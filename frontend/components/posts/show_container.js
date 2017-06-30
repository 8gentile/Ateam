import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostShow from './show';
import { fetchPost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import allUsers from '../../reducers/selectors'

const mapStateToProps = ({ posts, teams, users, session }, { match }) => ({
  userId: session.currentUser.id,
  postId: match.params.postId,
  teamId: match.params.teamId,
  post: posts[match.params.postId],
  users: allUsers(users),
  team: teams.entities[match.params.teamId],
});

const mapDispatchToProps = dispatch => ({
  fetchPost: (teamId, postId) => dispatch(fetchPost(teamId, postId)),
  fetchUsers: userId => dispatch(fetchUsers(userId)),
  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow));
