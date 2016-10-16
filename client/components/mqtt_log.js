import React from 'react';
import MqttLogEvent from './mqtt_log_event'
import { Table } from 'react-bootstrap'
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
    <Table className="log-events-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Time</th>
          <th>Topic</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
      {logEvents}
      </tbody>
    </Table>
  )
}

export default MqttLog;
