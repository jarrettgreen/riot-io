import React from 'react';
import MqttLogEvent from './mqtt_log_event'

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
    <table className="table log-events-table">
      <thead>
        <tr>
          <th>Time</th>
          <th>Topic</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
      {logEvents}
      </tbody>
    </table>
  )
}

export default MqttLog;
