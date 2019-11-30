import React, { Component } from 'react';
import axios from 'axios';

class DetailedScreen extends Component {

  componentDidMount = () => {
    axios
      .get()
      .then()
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
          
      </div>
    );
  }
}

export default DetailedScreen;