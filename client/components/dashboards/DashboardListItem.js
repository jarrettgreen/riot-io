import React from 'react';
import moment from 'moment';
import { Panel } from 'react-bootstrap';


function DashboardListItem(props) {
  return (
    <div className="col-xs-12 col-md-3">
      <Panel header={props.dashboard.title}>
        No Widgets
      </Panel>
    </div>
  )
}

export default DashboardListItem;
