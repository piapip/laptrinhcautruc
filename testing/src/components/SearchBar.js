import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';

class SearchBar extends Component {

  render() {
    return (
      <FormGroup>
        <Input onChange={e => this.props.setInput(e.target.value)}/>
      </FormGroup>
    );
  }
}

export default SearchBar;