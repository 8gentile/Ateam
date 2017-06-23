import { connect } from 'react-redux';
import Nav from './nav';
import {
  fetchTeams
} from '../../actions/team_actions';

const mapStateToProps = (state) => {
  return {
    teams: state.teams.entities,
    currentUser: state.session.currentUser,
    currentTeam: state.teams.currentTeam,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: user_id => dispatch(fetchTeams(user_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
