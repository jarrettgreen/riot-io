import React from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';


function DashboardListItem(props) {
  return (
    <Paper>
      <h3>{props.dashboard.title}</h3>
    </Paper>
  )
}

export default DashboardListItem;
