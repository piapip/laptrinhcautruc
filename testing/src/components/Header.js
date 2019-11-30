import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Header extends Component {
  render() {
    const showButton = this.props.user_id ? (
      <div>
        <Button>Logout</Button>
      </div>
    ) : (
      <div>
        <a href='http://secure-mountain-93147.herokuapp.com/requirelogin?url="localhost:8080"'>
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