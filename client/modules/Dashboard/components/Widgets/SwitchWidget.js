import React, {Component} from 'react';
import { Panel, DropdownButton, MenuItem } from 'react-bootstrap';
import Switch from 'react-toggle-switch'

class SwitchWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastMessage: ""
    }
  }

  watchForTopic = (message) => {
    if (message.topic === this.props.widget.topic) {
      this.setState({lastMessage: message.message} )
    }
  }

  componentDidMount() {
    this.socket = io.connect('/');
    this.socket.on('new mqtt event', (message) => {
      this.watchForTopic(JSON.parse(message))
		})
  }

  componentWillUnmount() {
    this.socket.close();
  }

  render() {
    return (
      <div className="col-xs-12 col-md-3">
        <div className="panel panel-default">
          <div className="panel-heading">
              {this.props.widget.topic}
          </div>
          <div className="panel-body">
           <Switch enabled={false}/>
            {this.state.lastMessage}
          </div>
        </div>
      </div>
    )
  }
}

export default SwitchWidget;
