import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';

class SearchBar extends Component {

  render() {
    return (
      <FormGroup>
        <Input onChange={e => this.props.setInput(e.target.value)}/>
        {/* <Label for="input">Input without validation</Label> */}
        {/* <Input invalid /> */}
        {/* <FormFeedback>Can't be blanked</FormFeedback> */}
      </FormGroup>
    );
  }
}

export default SearchBar;