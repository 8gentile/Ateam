import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TeamEdit from './edit_team';
import { fetchTeams } from '../../actions/team_actions';
import { fetchUsers, addMember, removeMember } from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = ({ teams, session, users }, { match }) => {
  return {
    team: teams.entities[match.params.teamId],
    currentUser: session.currentUser,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTeams: user_id => dispatch(fetchTeams(user_id)),
    fetchUsers: user_id => dispatch(fetchUsers(user_id)),
    addMember: member => dispatch(addMember(member)),
    removeMember: (user_id, member_id) => dispatch(removeMember(user_id, member_id)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default withRouter(
  connect(
  mapStateToProps,
  mapDispatchToProps
  )(TeamEdit));
