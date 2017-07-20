import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import TeamNav from '../teams/team_nav';
import { EventIcon } from './event_icon';

class EventIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentMonth: new Date().getMonth(),
      months: {
        "01": [],
        "02": [],
        "03": [],
        "04": [],
        "05": [],
        "06": [],
        "07": [],
        "08": [],
        "09": [],
        "10": [],
        "11": [],
        "12": [],
      },
      monthOrder: [],
    }

    this.eventAssign = this.eventAssign.bind(this);
    this.buildMonthOrder = this.buildMonthOrder.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvents(this.props.teamId);
  }

  eventAssign(events){
    events.forEach( event => {
      const month = moment(event.start_time, "YYYY-MM-DD HH:mm:ss")
        .format("MM");
      this.state.months[month].push(event)
    });
  }

  buildMonthOrder(month){
    let monthString;
    month += 1;
    for(let i = month; i < 13; i++){
      monthString = "";
      if (month < 10) {
        monthString += "0" + month.toString();
      } else {
        monthString += month.toString();
      }
      this.state.monthOrder.push(monthString);
    }

    let startMonth = 1;
    while(this.state.monthOrder.length < 12){
      monthString = "";
      if (startMonth < 10) {
        monthString += "0" + startMonth.toString();
      } else {
        monthString += startMonth.toString();
      }
      this.state.monthOrder.push(monthString);
    }
  }


  render(){
    const { events } = this.props;
    const { team } = this.props;
    if (!events) return null;
    if (!team) return null;
    this.eventAssign(events); // puts events in their respective month key
    this.buildMonthOrder(this.state.currentMonth); // builds the correct order of months

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
            <span className="add-event-button">Add an event</span>
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