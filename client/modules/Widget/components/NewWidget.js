import React, { Component } from 'react'


class NewWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          New Widget`
          <span className="caret"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li><a onClick={this.props.dispatch(toggleNewSwitchWidget());}>ToggleSwitch</a></li>
        </ul>
      </div>
    )
  }
}

export default NewWidget
