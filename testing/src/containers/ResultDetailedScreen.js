import React, { Component } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import ItemList from '../components/ItemList';
import Header from '../components/Header'
import config from '../config'

class ResultScreen extends Component {

  state = {
    products: []
  }

  componentDidMount = () => {
    let option = this.props.match.params.optionId
    let input = this.props.match.params.input
    let minPrice = this.props.match.params.minPrice
    let maxPrice = this.props.match.params.maxPrice
    let apiLink = `${config.BACKEND_NHOM9}/api/db/products`
    if(minPrice != null) {
      if(option !== 'name') apiLink = apiLink + `/${option}`
      apiLink = apiLink + `/price/${minPrice}/${maxPrice}/${input}`
    } else {
      apiLink = apiLink + `/${option}/${input}`
    }
    axios
      .get(apiLink)
      .then(data => { 
        this.setState({ products: data.data })
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
        <Link to={`/`}>
          <Button>Back</Button>
        </Link>
        <ItemList 
          products = {this.state.products}/>
      </div>
    );
  }
}

export default ResultScreen;