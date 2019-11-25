import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';

class App extends Component {   
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
