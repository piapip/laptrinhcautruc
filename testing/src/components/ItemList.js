import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ItemIntro from './ItemIntro';

class ItemList extends Component {
  render() {
    const printItem = this.props.products 
      ? this.props.products.map(product => (
        <div key={product.id}>
          <Link to={`/product/${product.name}`}>  
            <ItemIntro 
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