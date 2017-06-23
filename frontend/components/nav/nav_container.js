import { connect } from 'react-redux';
import Nav from './nav';
import {
  fetchTeams
} from '../../actions/team_actions';

const mapStateToProps = ({ teams, session }) => {
  
  return {
    teams: teams.entities,
    currentUser: session.currentUser,
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
