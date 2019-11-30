import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';

class DropdownOptions extends Component {
  
  onChangeSet = (event) => { 
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
      case 'Price':
        option = 'price'
        break;
      default:
        option = 'misc'
        break;
    }
    this.props.setOption(option);
  } 

  render() {
    return (
      <FormGroup>
        {/* <Label for="exampleSelect">Options</Label> */}
        <Input type="select" name="select" id="option" onChange={this.onChangeSet}>
          <option></option>
          <option>Name</option>
          <option>Brand</option>
          <option>Category</option>
          <option>Price</option>
        </Input>
    </FormGroup>
    );
  }
}

export default DropdownOptions;