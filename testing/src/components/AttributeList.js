import React, { Component } from 'react';

class AttributeList extends Component {
  render() {
    return (
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
    );
  }
}

export default AttributeList;