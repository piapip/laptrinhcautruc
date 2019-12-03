import React, { Component } from 'react';

import { Link } from 'react-router-dom'

class ShowItem extends Component {
  render() {
    return (
      <tr>
        <td>
        <Link to={`/product/${this.props.product.name}`}>  
          <img height="50%"
          src={this.props.product.image} 
          alt={this.props.product.description}/>
          </Link>
          </td>
        <td>{this.props.product.name}</td>
        <td>{this.props.product.brand}</td>
        <td>{this.props.product.category}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

export default ShowItem;