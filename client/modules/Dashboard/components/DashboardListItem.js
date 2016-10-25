import React from 'react';
import {Link} from 'react-router'
import moment from 'moment';
import { Panel } from 'react-bootstrap';


function DashboardListItem(props) {
  return (
    <div className="col-xs-12 col-md-3">
      <Panel header={props.dashboard.title}>
        No Widgets
        <Link to={`dashboards/${props.dashboard.slug}-${props.dashboard._id}`}>go</Link>
      </Panel>
    </div>
  )
}

export default DashboardListItem;
