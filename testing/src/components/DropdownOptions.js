import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';

class DropdownOptions extends Component {
  
  render() {
    return (
      <FormGroup>
        {/* <Label for="exampleSelect">Options</Label> */}
        <Input type="select" name="select" id="option" onChange={e => this.props.setOption(e.target.value)}>
          <option></option>
          <option>Brand</option>
          <option>Category</option>
          <option>Price</option>
        </Input>
    </FormGroup>
    );
  }
}

export default DropdownOptions;