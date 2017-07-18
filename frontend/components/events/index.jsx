import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import TeamNav from '../teams/team_nav';
import { EventIcon } from './event_icon';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      data
    });
  }

  componentDidMount() {
    this.props.fetchEvents(this.props.teamId);
  }


  render(){
    const { events } = this.props;
    const { team } = this.props;
    if (!events) return null;
    if (!team) return null;

    const eventItems = events.map( event => {
      const date = moment(event.start_time, "YYYY-MM-DD HH:mm:ss");
      return (
        <li className="event-item" key={event.id}>
          <Link to={`/teams/${team.id}/events/${event.id}`}>
            <div>
              <section>
                <EventIcon dow={date.format('dddd')} date={date.format('DD')} />
                <div className="event-info">
                  <h1>{ event.title }</h1>
                  <p>{ event.notes }</p>
                </div>
              </section>
            </div>
          </Link>
        </li>
      );
    });

    return(
      <section className="schedule-panel">
        <TeamNav
          team={this.props.team}
        />
        <section className="event-index">
          <h1>Schedule</h1>
          <Link to={`/teams/${this.props.teamId}/events/new`}>
            <span className="Event-message-button">Add another event</span>
          </Link>
          <ul>{ eventItems }</ul>
        </section>
      </section>
    );
  }
}

// date picker
// <input
//             type="date"
//             selected={this.state.startDate}
//             onChange={this.handleChange} />;


export default withRouter(EventIndex);