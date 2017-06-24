import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamShow from './show_team';
import {
  fetchTeam
} from '../../actions/team_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ teams, session }, { match }) => {
  debugger
  return {
    team: teams.entities[match.params.teamId],
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeam: team_id => dispatch(fetchTeam(team_id)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamShow));
