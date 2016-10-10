import React, { Component } from 'react'

class AddDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="{this.props.display == false ? '' : 'hidden'}">
        <h2>New Dashboard</h2>
        <input ref="title" />
        <a href="#" onClick={this.addDashboard}>Create Dashboard</a>
      </div>
    )
  }
}

export default AddDashboard
