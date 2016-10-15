import React from 'react';
import MqttLogEvent from './mqtt_log_event'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
const MqttLog = (props) => {
  const logEvents = props.logEvents.map((entry) => {
    return (
      <MqttLogEvent
             key = {entry._id}
          topic = {entry.topic}
        message = {entry.message}
      timestamp = {entry.created}
      />
    )
  })


  return (
    <Table className="log-events-table" displaySelectAll={false}>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
        enableSelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Date</TableHeaderColumn>
          <TableHeaderColumn>Time</TableHeaderColumn>
          <TableHeaderColumn>Topic</TableHeaderColumn>
          <TableHeaderColumn>Message</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
      {logEvents}
      </TableBody>
    </Table>
  )
}

export default MqttLog;
