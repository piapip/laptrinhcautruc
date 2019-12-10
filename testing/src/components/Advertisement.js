import React, { Component } from 'react';
import axios from 'axios';

import config from '../config'

class Advertisement extends Component {

  state = {
    advertisement: {}
  }

  componentDidMount = () => {
    axios
      .get(`${config.NHOM5}/api/banners`)
      .then(data => {
        let advertisementList = data.data
        let random = Math.floor(Math.random() * advertisementList.length)
        this.setState({ advertisement: advertisementList[random]})
      })
      .catch(error => console.log(error))
  }

  render() {
    const showAd = this.state.advertisement ? (
      <a href={this.state.advertisement.link} target="blank">
        <img src={this.state.advertisement.image_name} id="Advertisement" alt="Just an ad"></img>
      </a>
    ) : "";
    return (
      <div>
        {showAd}
      </div>
    );
  }
}

export default Advertisement;