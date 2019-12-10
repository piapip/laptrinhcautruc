import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import config from '../config';

class Header extends Component {

  render() {
    const showButton = this.props.userId ? (
      <ButtonGroup>
        <Button >
          <a href={`${config.NHOM2}/logout?url=${config.BACKEND_NHOM9}/api`}>Logout</a>
        </Button>
        <Button>
          <a href={`${config.NHOM1}/cart/${this.props.sessionId}&${this.props.userId}`}>Your cart</a>
        </Button>
      </ButtonGroup>
    ) : (
      <ButtonGroup>
        <Button>
          <a href={`${config.NHOM2}/requirelogin?url=${config.BACKEND_NHOM9}/api`}>Login</a>
        </Button>
      </ButtonGroup>
    )
    return (
      <div>
        {showButton}
      </div>
        
    );
  }
}

export default Header;