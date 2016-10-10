import React, { Component } from 'react'

class AddDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="{this.props.display == true? '' : 'hidden'}">
        <h2>New Dashboard</h2>
        <input placeholder={this.props.intl.messages.authorName} className={styles['form-field']} ref="title" />
        <a className={styles['post-submit-button']} href="#" onClick={this.addPost}><FormattedMessage id="submit" /></a>
      </div>
    )
  }
}

export default AddDashboard
