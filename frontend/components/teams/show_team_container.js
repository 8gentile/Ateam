import { connect } from 'react-redux';
import TeamShow from './show_team';
import {
  fetchTeam
} from '../../actions/team_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    teams: state.teams.entities,
    currentUser: state.session.currentUser,
    // currentTeam: state.teams.currentTeam,s
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeam: team_id => dispatch(fetchTeams(team_id)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamShow);
