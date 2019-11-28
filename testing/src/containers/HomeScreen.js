import React, { Component } from 'react';

import Header from '../components/Header';
import SearchSection from './SearchSection';

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchSection />
      </div>
    );
  }
}

export default HomeScreen;