import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';
import ResultDetailedScreen from './containers/ResultDetailedScreen';
import ItemDetailedScreen from './containers/ItemDetailedScreen';

class App extends Component {   
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path ='/'
            render={(props) => {
              return <HomeScreen {...props} />
            }} />
          <Route path='/option/:optionId/product/:input' 
            render={(props) => {
              return <ResultDetailedScreen {...props} />
            }}/>
          <Route path='/product/:itemName'
            render={(props) => {
              return <ItemDetailedScreen {...props} />
            }}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
