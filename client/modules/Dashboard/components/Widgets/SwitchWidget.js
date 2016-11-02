import React, {Component} from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';
import Switch from 'react-toggle-switch'

class SwitchWidget extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastMessage: "",
      topic: this.props.widget.topic
    }
  }

  componentDidMount() {
    this.socket = io.connect('/');
    this.socket.on('new mqtt event', (message) => {
      this.watchForTopic(JSON.parse(message))
		})
    this.socket.emit('publish to mqtt', this.state.topic)
  }

  componentWillUnmount() {
    this.socket.close();
  }

  watchForTopic = (message) => {
    const widgetTopic = this.props.widget.topic
    const onValue = this.props.widget.properties.onValue
    const offValue = this.props.widget.properties.offValue

    if (message.topic === widgetTopic && (message.message === onValue || message.message === offValue)){
      this.setState( {lastMessage: message.message} )
    }
  }

  handleClick = () => {

    this.socket.emit('publish to mqtt', this.state.topic)
    console.log('dunno')
  }


  render() {
    return (
      <div className="col-xs-12 col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
              {this.props.widget.topic}
          </div>
          <div className="panel-body">
           <Switch onClick={this.handleClick}
            on={this.state.lastMessage === this.props.widget.properties.onValue ?  true : false}/>
            {this.state.lastMessage}
          </div>
        </div>
      </div>
    )
  }
}

export default SwitchWidget;
