import React, { Component } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

class DropdownOptions extends Component {
  
  onChangeOption = (event) => { 
    let option = ''
    switch(event.target.value) {
      case '': 
        option = 'misc'
        break
      case 'Name':
        option = 'name'
        break
      case 'Brand':
        option = 'brands'
        break;
      case 'Category':
        option = 'categories'
        break;
      default:
        option = 'misc'
        break;
    }
    this.props.setOption(option);
  } 

  onChangeMinPrice = (event) => {
    this.props.setMinPrice(event.target.value)
  }

  onChangeMaxPrice = (event) => {
    this.props.setMaxPrice(event.target.value)
  }

  render() {
    return (
      <FormGroup>
        <FormGroup>
          <Input type="select" name="select" id="option" onChange={this.onChangeOption}>
            <option></option>
            <option>Name</option>
            <option>Brand</option>
            <option>Category</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="price">Price</Label>
          <Input type="number" name="minPrice" id="minPrice" placeholder="minPrice" onChange={this.onChangeMinPrice}/>
          <Input type="number" name="maxPrice" id="maxPrice" placeholder="maxPrice" onChange={this.onChangeMaxPrice}/>
        </FormGroup>
    </FormGroup>
    );
  }
}

export default DropdownOptions;