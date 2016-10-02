import React, {Component} from 'react'
import MqttLog from '../components/mqtt_log'
class MqttLogViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {logEvents:[]};
    this.fetchMqttLogEvents = this.fetchMqttLogEvents.bind(this);
  }

  fetchMqttLogEvents() {
    $.ajax({
      url: '/api/mqtt_events',
      dataType: 'json',
      success: (data) => {
        this.setState({logEvents: data});
      },
      error: (xhr, status, err) => {
      console.error('/api/mqtt_events', status, err.toString());
      }
  });
}


  componentDidMount() {
    this.fetchMqttLogEvents();
    var poller = setInterval(this.fetchMqttLogEvents,1000)
  }

  componentWillUnmount() {
    clearInterval(poller);
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
