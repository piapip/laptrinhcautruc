import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../components/SearchBar';
import DropdownOption from '../components/DropdownOptions';

class SearchSection extends Component {
  
  state = {
    option: 0,
    input: ''
  }

  searchForBrand = () => {
    axios
      .get("localhost:8080/api/db/products/get-brand/"+ this.state.input)
      .then((data) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }
  
  searchForCategory = () => {
    axios
    .get("localhost:8080/api/db/products/get-category/"+ this.state.input)
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.log(error))
  }

  searchForName = () => {
    axios
      .get("localhost:8080/api/db/products/get-name/"+ this.state.input)
      .then((data) => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <SearchBar />
        <DropdownOption />
      </div>
    );
  }
}

export default SearchSection;