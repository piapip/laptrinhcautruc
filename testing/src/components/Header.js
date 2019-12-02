import React, { Component } from 'react';
import { Button } from 'reactstrap';

import config from '../config';

class Header extends Component {

  render() {
    const showButton = this.props.userId ? (
      <div>
        <a href={`${config.NHOM2}/logout?url=${config.BACKEND_NHOM9}/api`}>
          <Button onClick = {this.logout}>Logout</Button>
        </a>
      </div>
    ) : (
      <div>
        <a href={`${config.NHOM2}/requirelogin?url=${config.BACKEND_NHOM9}/api`}>
          <Button>Login</Button>
        </a>
      </div>
    )
    return (
      <div>
        {showButton}
      </div>
    );
  }
}

export default Header;