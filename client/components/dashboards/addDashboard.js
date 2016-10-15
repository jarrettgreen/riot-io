import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import callApi from '../../util/apiCaller';

class AddDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      new_dashboard_title: ''
    };
  }

  toggleDialog = () => {
   this.setState({open: !this.state.open});
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
    const actions = [
      <FlatButton label="Cancel" primary={true} onTouchTap={this.toggleDialog}/>,
      <FlatButton label="Submit" primary={true} onTouchTap={this.submitForm}/>,
    ];
    return(
      <div>
        <FloatingActionButton onTouchTap={this.toggleDialog}>
          <ContentAdd />
        </FloatingActionButton>

        <Dialog title="New Dashboard" actions={actions} modal={true} open={this.state.open}>
          <TextField floatingLabelText="Title" value={this.state.value} onChange={this.handleChange}/>
        </Dialog>

      </div>
    )
  }
}
        //* <a href="#" onClick={this.addDashboard}>Create Dashboard</a> */}
export default AddDashboard
