import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import { Modal, Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import TextField from 'material-ui/TextField';

import callApi from '../../util/apiCaller';

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
    callApi('dashboards', 'post', {
      dashboard: {
        title: this.state.new_dashboard_title,
      }
    }).then(this.toggleDialog);
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

export default NewDashboard
