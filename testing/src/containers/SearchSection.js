import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import DropdownOption from '../components/DropdownOptions';

class SearchSection extends Component {

  state = {
    input: '',
    minPrice: 0,
    maxPrice: 0,
    option: 'misc' //0 - name, 1 - brand, 2 - category, 3 - priceOnly, 4 - price with product's name
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
            <Link to={`/option/${this.state.option}/product/${this.state.input}`}>  
              <Button>Find</Button>
            </Link>
        </Form>
      </div>
    );
  }
}

export default SearchSection;