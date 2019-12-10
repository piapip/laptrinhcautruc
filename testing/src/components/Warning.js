import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class Warning extends Component {
  render() {
    const message = this.props.message !== '' ? (
      this.props.message.toUpperCase().includes("FAIL") ? (
        <Alert color="danger">
          {this.props.message}
        </Alert>
      ) : (
        <Alert color="success">
          {this.props.message}
        </Alert>
      )
    ) : ""
    return (
      <div>
        {message}
      </div>
    );
  }
}

export default Warning;