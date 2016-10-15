import React from 'react';
import moment from 'moment';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Chip from 'material-ui/Chip';
const MqttLogEvent = ({id, topic, message, timestamp}) => {

  return (
    <TableRow >
      <TableRowColumn className="timestamp">{moment(timestamp).format("MM/DD/YYYY")}</TableRowColumn>
      <TableRowColumn className="timestamp">{moment(timestamp).format("h:mm:ss.ms A")}</TableRowColumn>
      <TableRowColumn className="topic">
        <Chip>{topic}</Chip>
      </TableRowColumn>
      <TableRowColumn className="message">{message}</TableRowColumn>
    </TableRow>
  )
}
{/* <span className={`label ${topic === 'WillMsg' ? 'label-danger' : 'label-default'}`}>{topic}</span></TableRowColumn> */}
export default MqttLogEvent;
