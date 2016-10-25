import React, { component } from 'react'

import DashboardListItem from './DashboardListItem'

function DashboardList(props) {
  return (
    <div>
      {
        props.dashboards.map(dashboard => (
          <DashboardListItem
            dashboard={dashboard}
            key={dashboard._id}
          />
        ))
      }
    </div>
  );
}

export default DashboardList;
