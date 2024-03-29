import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from '../axios'
import config from '../config'
import ItemList from '../components/ItemList';
import Header from '../components/Header'
import Warning from '../components/Warning'

class ItemDetailedScreen extends Component {
  state = {
    products: [],
    message: ''  
  }

  componentDidMount = () => {
    let itemId = this.props.match.params.itemId
    axios
      .get(`${config.BACKEND_NHOM9}/api/db/products/id/${itemId}`)
      .then(data => {
        this.setState({ products: data.data })
      })
      .catch(error => console.log(error))
  }

  addToCart = () => {
    if(!this.props.userId) {
      console.log("yopyop")
    } else {
      let userId = this.props.userId
      let itemId = this.state.products[0].id
      axios
        .post(`${config.NHOM1}/api/carts`, {
          "user_id": userId,
          "product_id": itemId
        })
        .then(data => {
          this.setState({ message: data.data.message })
        })
        .catch(error => console.log(error))
    }
  }

  render() {
    const addToCartButton = this.props.userId ? (
      <div>
        <Button onClick={this.addToCart}>Add to your cart</Button>
      </div>
    ) : (
      <div>
        <a href={`${config.NHOM2}/requirelogin?url=${config.BACKEND_NHOM9}/api`}>
          <Button>Add to your cart</Button>
        </a>
      </div>
    )
    return (
      <div>
        <Header 
          setSession = {this.props.setSession}
          userId={this.props.userId}
          sessionId={this.props.sessionId}/>
        <Warning
          message = {this.state.message}/>
        <ItemList 
          products={this.state.products}/>
        {addToCartButton}
        <Link to={`/`}>
          <Button>Back</Button>
        </Link>
      </div>
    );
  }
}

export default ItemDetailedScreen;