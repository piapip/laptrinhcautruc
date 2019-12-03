import React, { Component } from 'react';
import { Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import ShowItem from './ShowItem';
import AttributeList from './AttributeList';

class ItemList extends Component {
  state = {
    currentPage: 1,
    item_per_page: 3
  }

  setPage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const indexOfLastItem = this.state.currentPage * this.state.item_per_page;
    const indexOfFirstItem = indexOfLastItem - this.state.item_per_page;
    const currentItems = this.props.products.slice(indexOfFirstItem, indexOfLastItem)

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.products.length / this.state.item_per_page); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <PaginationItem key={number}>
          <PaginationLink onClick={this.setPage} id={number}>
            {number}
          </PaginationLink>
        </PaginationItem>
      );
    });

    const printItem = this.props.products 
    ? currentItems.map(product => (
        <ShowItem key={product.id}
          product = {product}/> 
    )) : ''
    return (
      <div>
        <ul>
          <Pagination>
            {renderPageNumbers}
          </Pagination>
        </ul>
        <ul>
          <Table borderless>
            <AttributeList />
            <tbody>
              {printItem}
            </tbody>
          </Table>
        </ul>
      </div>
    );
  }
}

export default ItemList;