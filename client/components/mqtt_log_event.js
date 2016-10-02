import React from 'react';

const MqttLogEvent = ({id, topic, message}) => {

  return (
    <li key={id} className="mqtt-log-item">
      <span className={`label ${topic === 'WillMsg' ? 'label-danger' : 'label-success'}`}>{topic}</span>
      <p>{message}</p>
    </li>
  )
}

export default MqttLogEvent;
