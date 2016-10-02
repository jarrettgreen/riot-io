import React from 'react';
import MqttLogEvent from './mqtt_log_event'

const MqttLog = (props) => {
  const logEvents = props.logEvents.map((entry) => {
    return (
      <MqttLogEvent
             id = {entry._id}
          topic = {entry.topic}
        message = {entry.message}
      />
    )
  })


  return (
    <ul>
      {logEvents}
    </ul>
  )
}

export default MqttLog;
