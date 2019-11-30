import React, { Component } from 'react';
import axios from 'axios';

import SearchSection from '../components/SearchSection';
import Header from '../components/Header';
import ItemList from '../components/ItemList'

class HomeScreen extends Component {

  state = {
    products: []
  }

  componentDidMount = () => {

    if(this.props.match.params.userId) {
      let userId = this.props.match.params.userId
      let sessionId = this.props.match.params.sessionId
      this.props.setSession(userId, sessionId)
    }

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
        <Header 
          user_id={this.props.user_id}
          session_id={this.props.sessionId}/>
        <SearchSection />
        <ItemList 
          products = {this.state.products}/>
      </div>
    );
  }
}

export default HomeScreen;