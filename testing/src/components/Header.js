import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Header extends Component {

  render() {
    const showButton = this.props.userId ? (
      <div>
        <a href='http://secure-mountain-93147.herokuapp.com/logout?url=http://localhost:8080/api'>
          <Button onClick = {this.logout}>Logout</Button>
        </a>
      </div>
    ) : (
      <div>
        <a href='http://secure-mountain-93147.herokuapp.com/requirelogin?url=http://localhost:8080/api'>
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