import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostIndex from './index';
import { fetchPosts } from '../../actions/post_actions';
import allPosts from '../../reducers/selectors';

const mapStateToProps = ( { posts, teams }, { match } ) => {
  return {
    posts: allPosts(posts),
    teamId: match.params.teamId,
    team: teams.entities[match.params.teamId],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: teamId => dispatch(fetchPosts(teamId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex));
