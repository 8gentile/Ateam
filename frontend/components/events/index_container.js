import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventIndex from './index';
import { fetchEvents } from '../../actions/event_actions';
import allEvents from '../../reducers/selectors';

const mapStateToProps = ( { events, teams }, { match } ) => {
  return {
    events: allEvents(events),
    teamId: match.params.teamId,
    team: teams.entities[match.params.teamId],
  }
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: teamId => dispatch(fetchEvents(teamId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex));
