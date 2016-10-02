import React from 'react';
import moment from 'moment';
const MqttLogEvent = ({id, topic, message, timestamp}) => {

  return (
    <tr className="mqtt-log-item">
      <td className="timestamp">{moment(timestamp).format("MM/DD/YYYY h:mm:ss a")}</td>
      <td className="topic"><span className={`label ${topic === 'WillMsg' ? 'label-danger' : 'label-success'}`}>{topic}</span></td>
      <td className="message">{message}</td>
    </tr>
  )
}

export default MqttLogEvent;
