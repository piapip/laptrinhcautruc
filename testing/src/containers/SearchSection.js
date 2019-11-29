import React, { Component } from 'react';
import axios from 'axios';
import { Form, Row, Col, Button } from 'reactstrap';

import SearchBar from '../components/SearchBar';
import DropdownOption from '../components/DropdownOptions';

class SearchSection extends Component {

  state = {
    input: '',
    minPrice: 0,
    maxPrice: 0,
    option: '' //0 - name, 1 - brand, 2 - category, 3 - priceOnly, 4 - price with product's name
  }
  
  setInput = (input) => {
    this.setState({ input })
  }

  setOption = (option) => {
    this.setState({ option })
  }

  setMinPrice = (minPrice) => {
    this.setState({ minPrice })
  }

  setMaxPrice = (maxPrice) => {
    this.setState({ maxPrice })
  }

  searchForBrand = (input) => {
    axios
      .get("localhost:8080/api/db/products/brands/"+ input)
      .then((data) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }
  
  searchForCategory = (input) => {
    axios
    .get("localhost:8080/api/db/products/categories/"+ input)
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  searchForName = (input) => {
    axios
      .get("localhost:8080/api/db/products/name/"+ input)
      .then((data) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  searchForPrice = (input, minPrice, maxPrice) => {
    let apiLink = "localhost:8080/api/db/products/price/"+ minPrice + "/" + maxPrice
    if(input !== '') {
      apiLink = apiLink + "/" + input
    }
    axios
      .get(apiLink)
      .then((data) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Form> 
          <Row form>
            <Col md={2}> 
              <DropdownOption setOption = {this.setOption}/>
            </Col>
            <Col md={6}>
              <SearchBar 
                setMinPrice = {this.setMinPrice}
                setMaxPrice = {this.setMaxPrice}
                setInput = {this.setInput}/>
            </Col>
          </Row>
          <Button>Find</Button>
        </Form>
      </div>
    );
  }
}

export default SearchSection;