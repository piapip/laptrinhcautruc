import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ShowItem from './ShowItem';

class ItemList extends Component {
  render() {
    const printItem = this.props.products 
      ? this.props.products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.name}`}>  
            <ShowItem 
              product = {product}/>    
          </Link>
        </div>
      )) : ''
    return (
      <div>
        {printItem}
      </div>
    );
  }
}

export default ItemList;