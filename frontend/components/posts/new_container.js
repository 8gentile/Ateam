import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostNew from './new';
import { createPost } from '../../actions/post_actions';

const mapStateToProps = ({ teams, session }, { match }) => ({
  userId: session.currentUser.id,
  teamId: match.params.teamId,
  team: teams.entities[match.params.teamId],
});

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(createPost(post)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostNew));
