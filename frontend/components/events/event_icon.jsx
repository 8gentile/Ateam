import Moment from 'react-moment';
import React from 'react';

export const EventIcon = (props) => {

    const dayAbrev = props.dow.slice(0,3).toUpperCase();
    return(
      <div className="event-icon-container">
        <div className="icon-dow">
          <span>{ dayAbrev }</span>
        </div>
        <div className="icon-date">
          <span>{ props.date }</span>
        </div>
      </div>
    );
}
