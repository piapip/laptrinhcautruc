import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';

import axios from 'axios';

class App extends Component {   

  componentDidMount = () => {
    axios
      .get("http://localhost:8080/api/db/products/brands/adi")
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path ='/'
            render={(props) => {
              return <HomeScreen {...props} />
            }} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
