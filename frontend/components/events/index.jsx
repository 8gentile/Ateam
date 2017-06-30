import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Moment from 'react-moment';
import TeamNav from '../teams/team_nav';

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
      return (
        <li className="event-item" key={event.id}>
          <Link to={`/teams/${team.id}/events/${event.id}`}>
            <div>
              <section>
                <h1>{ event.title }</h1>
                <p>{ event.notes }</p>
              </section>
              <Moment format="MM/DD/YYYY">{ event.date }</Moment>
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

// <input
//             type="date"
//             selected={this.state.startDate}
//             onChange={this.handleChange} />;


export default withRouter(EventIndex);