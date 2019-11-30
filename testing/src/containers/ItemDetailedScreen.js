import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from 'axios'
import ShowItem from '../components/ShowItem';

class ItemDetailedScreen extends Component {
  state = {
    product: {}
  }

  componentDidMount = () => {
    let itemName = this.props.match.params.itemName
    axios
      .get('http://localhost:8080/api/db/products/name/' + itemName)
      .then(data => {
        this.setState({ product: data.data })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <ShowItem 
          product={this.state.product}/>
          <div>
            <Button>Add to the cart</Button>
          </div>
          <Link to={`/`}>
            <Button>Back</Button>
          </Link>
      </div>
    );
  }
}

export default ItemDetailedScreen;