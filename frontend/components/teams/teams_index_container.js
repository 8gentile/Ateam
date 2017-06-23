import { connect } from 'react-redux';
import Teams from './teams_index';
import {
  fetchTeams,
  createTeam
} from '../../actions/team_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({session, teams}) => {
  const currentUserId = Object.keys(session.currentUser);
  return {
    teams: teams.entities,
    currentUser: session.currentUser[currentUserId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: user_id => dispatch(fetchTeams(user_id)),
    createTeam: team => dispatch(createTeam(team)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Teams);
