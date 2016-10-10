import React from 'react';
import moment from 'moment';

function DashboardListItem(props) {
  return (
    <div> {props.dashboard.title} </div>
  )
}

export default DashboardListItem;
