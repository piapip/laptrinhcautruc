import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from '../axios'
import config from '../config'
import ItemList from '../components/ItemList';
import Header from '../components/Header'

class ItemDetailedScreen extends Component {
  state = {
    products: []  
  }

  componentDidMount = () => {
    let itemName = this.props.match.params.itemName
    axios
      .get(`${config.BACKEND_NHOM9}/api/db/products/name/${itemName}`)
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
      let itemId = this.state.product.id
      console.log(userId)
      console.log(itemId)
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