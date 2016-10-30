import React from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';

function SwitchWidget(props) {
  let widgetCount = props.dashboard.dashboardWidgets.length
  return (
    <div className="col-xs-12 col-md-3">
      <div className="panel panel-default">
        <div className="panel-heading">
          {props.widget.title}
        </div>
        <div className="panel-body">
        </div>
      </div>
    </div>
  )
}

export default SwitchWidget;
