import React, { Component } from 'react';

import ItemIntro from './ItemIntro'

class ItemDetails extends Component {
  render() {
    return (
      <div>
        <ItemIntro 
          product={this.props.product}/>
      </div>
    );
  }
}

export default ItemDetails;