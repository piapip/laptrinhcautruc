import React, { Component } from 'react';
import axios from '../axios';

import SearchSection from '../components/SearchSection';
import Header from '../components/Header';
import ItemList from '../components/ItemList'
import Advertisement from '../components/Advertisement'
import config from '../config'

class HomeScreen extends Component {

  state = {
    products: []
  }

  componentDidMount = () => {
    axios
      .get(`${config.BACKEND_NHOM9}/api/db/products/latest`)
      .then(data => {
        this.setState({ products : data.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Header 
          setSession = {this.props.setSession}
          userId={this.props.userId}
          sessionId={this.props.sessionId}/>
        <SearchSection />
        <ItemList 
          products = {this.state.products}/>
        <Advertisement />
      </div>
    );
  }
}

export default HomeScreen;