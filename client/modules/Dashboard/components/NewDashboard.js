import React, { Component } from 'react'
import { Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { persistAndAddDashboard } from '../DashboardActions';

class NewDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      new_dashboard_title: ''
    };
  }

  toggleModal = () => {
   this.setState({showModal: !this.state.showModal});
  };

  handleChange = (event) => {
    this.setState({
      new_dashboard_title: event.target.value,
    });
  };

  submitForm = () => {
    const newTitle = this.state.new_dashboard_title
    this.props.dispatch(persistAndAddDashboard({ title: newTitle }))
    this.toggleModal();
    // callApi('dashboards', 'post', {
    //   dashboard: {
    //     title: this.state.new_dashboard_title,
    //   }
    // }).then(this.toggleDialog);
  };

  render() {
    return(
      <div>
        <div className="col-xs-12 col-md-3">
            <Button bsStyle="success" onClick={this.toggleModal}>
              New Dashboard
            </Button>

        </div>
        <Modal show={this.state.showModal} onHide={this.toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>New Dashboard</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup>
              <ControlLabel>Title</ControlLabel>
              <FormControl type="text" placeholder="Title" value={this.state.new_dashboard_title} onChange={this.handleChange} />
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.submitForm}>Submit</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(persistAndAddDashboard, dispatch) }
}
export default connect(mapDispatchToProps)(NewDashboard)
