import React, {Component} from 'react'
import MqttLog from '../components/mqtt_log'
import callApi from '../util/apiCaller';
class MqttLogViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logEvents:[]
    };
  }


  componentWillMount() {

    callApi('mqtt_events')
      .then(res => {
        this.setState({logEvents: res});
      }
    );
    this.socket = io.connect('/');
    this.socket.on('new mqtt event', (message) => {
      this.setState(
        {
          logEvents: [JSON.parse(message), ...this.state.logEvents]
        }
      );
		});
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return(
      <div>
      <h1> MQTT Logs </h1>
      <div className="mqtt-log-container">
        <MqttLog logEvents={this.state.logEvents} />
      </div>
      </div>
    )
  }
}

export default MqttLogViewer
