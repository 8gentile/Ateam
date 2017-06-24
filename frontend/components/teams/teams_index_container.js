import { connect } from 'react-redux';
import Teams from './teams_index';
import { withRouter } from 'react-router-dom';
import {
  fetchTeams,
  createTeam
} from '../../actions/team_actions';
import { clearErrors } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions.js';

const mapStateToProps = ({ session, teams, users }) => {
  return {
    teams: teams.entities,
    currentUser: session.currentUser,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: user_id => dispatch(fetchTeams(user_id)),
    fetchUsers: user_id => dispatch(fetchUsers(user_id)),
    createTeam: team => dispatch(createTeam(team)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
