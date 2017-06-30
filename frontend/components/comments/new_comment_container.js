import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewComment from './new_comment';
import { createComment } from '../../actions/comment_actions';
import allUsers from '../../reducers/selectors'

const mapStateToProps = ({ users, session }, { match }) => ({
  userId: session.currentUser.id,
  postId: match.params.postId,
  users: allUsers(users),
});

const mapDispatchToProps = dispatch => ({
  processForm: (userId, postId) => dispatch(createComment(userId, postId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(NewComment));
