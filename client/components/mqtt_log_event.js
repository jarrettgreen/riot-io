import React from 'react';
import moment from 'moment';
import Chip from 'material-ui/Chip';
const MqttLogEvent = ({id, topic, message, timestamp}) => {

  return (
    <tr className="mqtt-log-item">
      <td className="timestamp">{moment(timestamp).format("MM/DD/YYYY")}</td>
      <td className="timestamp">{moment(timestamp).format("h:mm:ss.ms A")}</td>
      <td className="topic"><span className={`label ${topic === 'WillMsg' ? 'label-danger' : 'label-primary'}`}>{topic}</span></td>
      <td className="message">{message}</td>
    </tr>
  )
}
{/* <span className={`label ${topic === 'WillMsg' ? 'label-danger' : 'label-default'}`}>{topic}</span></TableRowColumn> */}
export default MqttLogEvent;
