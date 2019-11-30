import React, { Component } from 'react';
import axios from 'axios';

import SearchSection from './SearchSection';
import Header from '../components/Header';
import ItemList from '../components/ItemList'

class HomeScreen extends Component {

  state = {
    products: []
  }

  componentDidMount = () => {
    axios
      .get('http://localhost:8080/api/db/products/latest')
      .then(data => {
        this.setState({ products : data.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Header />
        <SearchSection />
        <ItemList 
          products = {this.state.products}/>
      </div>
    );
  }
}

export default HomeScreen;