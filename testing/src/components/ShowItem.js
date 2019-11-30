import React, { Component } from 'react';

class ShowItem extends Component {
  render() {
    return (
      <div className="item_detailed">
        <img 
          src={this.props.product.image} 
          alt={this.props.product.description}/>
        <p>Name: {this.props.product.name}</p>
        <p>Brand: {this.props.product.brand}</p>
        <p>Category: {this.props.product.category}</p>
        <p>Price: {this.props.product.price}</p>
      </div>
    );
  }
}

export default ShowItem;