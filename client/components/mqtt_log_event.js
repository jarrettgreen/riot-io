import React from 'react';

const MqttLogEvent = ({id, topic, message, timestamp}) => {

  return (
    <tr className="mqtt-log-item">
      <td>{timestamp}</td>
      <td><span className={`label ${topic === 'WillMsg' ? 'label-danger' : 'label-success'}`}>{topic}</span></td>
      <td>{message}</td>
    </tr>
  )
}

export default MqttLogEvent;
