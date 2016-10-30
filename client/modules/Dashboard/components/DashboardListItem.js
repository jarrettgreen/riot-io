import React from 'react';
import {Link} from 'react-router'
import moment from 'moment';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';

function DashboardListItem(props) {
  let widgetCount = props.dashboard.dashboardWidgets.length
  return (
    <div className="col-xs-12 col-md-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          {props.dashboard.title}
          <div className="btn-group dashboard-actions pull-right">
            <button type="button" className="btn btn-link dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <span className="glyphicon glyphicon-cog"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Edit</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#" className="delete-dashboard" onClick={props.deleteDashboard}>Delete</a></li>
            </ul>
          </div>
        </div>
        <div className="panel-body">
          {`${widgetCount} Widgets`}
          <Link to={`dashboards/${props.dashboard.slug}-${props.dashboard._id}`}>go</Link>
          

        </div>
      </div>
    </div>
  )
}

export default DashboardListItem;
