import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import axios from 'axios'
import ItemDetails from '../components/ItemDetailed';

class ItemDetailedScreen extends Component {
  state = {
    product: {}
  }

  componentDidMount = () => {
    let itemName = this.props.match.params.itemName
    axios
      .get('http://localhost:8080/api/db/products/name/' + itemName)
      .then(data => {
        this.setState({ product: data.data[0] })
      })
      .catch(error => console.log(error))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <ItemDetails 
          product={this.state.product}/>
          <Link to={`/`}>
            <Button>Back</Button>
          </Link>
      </div>
    );
  }
}

export default ItemDetailedScreen;