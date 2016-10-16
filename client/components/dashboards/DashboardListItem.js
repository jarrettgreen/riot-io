import React from 'react';
import moment from 'moment';
import Paper from 'material-ui/Paper';


function DashboardListItem(props) {
  return (
    <div className="col-xs-12 col-md-3">
      <div className="well">
        <h3>{props.dashboard.title}</h3>
      </div>
    </div>
  )
}

export default DashboardListItem;
