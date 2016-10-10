import React from 'react';
import moment from 'moment';

function DashboardListItem(props) {
  return (
    <tr className="mqtt-log-item">
      <td className="message">{this.props.dashboard.title}</td>
    </tr>
  )
}

export default DashboardListItem;
