import React, { Component } from 'react'
import { initWidget } from '../WidgetActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
class NewWidget extends Component {

  constructor (props) {
    super(props)
  }

  handleClick = () => {
    this.props.dispatch(initWidget('SwitchWidget'))
  }

  render () {
    return (
      <div className='dropdown'>
        <button className='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>
          New Widget
          <span className='caret'></span>
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
          <li><a onClick={this.handleClick}>ToggleSwitch</a></li>
        </ul>
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(initWidget, dispatch) }
}
export default connect(mapDispatchToProps)(NewWidget)
