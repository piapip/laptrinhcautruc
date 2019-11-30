import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';
import ResultDetailedScreen from './containers/ResultDetailedScreen';
import ItemDetailedScreen from './containers/ItemDetailedScreen';
import axios from 'axios';

class App extends Component {   

  state = {}

  componentDidMount = () => {
    axios
      .get('http://localhost:8080/setsession/isLogin')
      .then(data => {
        console.log(data.data)
      })
      .catch(error => console.log(error))
  }

  setSession = (sessionId, userId) => {
    this.setState({ sessionId, userId })
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path ='/'
            render={(props) => {
              return <HomeScreen {...props} 
                sessionId = {this.state.sessionId}
                userId = {this.state.sessionId}
                setSession = {this.setSession}/>
            }} />
          <Route exact path='/option/:optionId/product/:input' 
            render={(props) => {
              return <ResultDetailedScreen {...props}
                sessionId = {this.state.sessionId}
                userId = {this.state.sessionId}/>
            }}/>

          <Route exact path='/option/:optionId/product/:input/price/:minPrice/:maxPrice' 
            render={(props) => {
              return <ResultDetailedScreen {...props}
              sessionId = {this.state.sessionId}
              userId = {this.state.sessionId} />
            }}/>

          <Route path='/product/:itemName'
            render={(props) => {
              return <ItemDetailedScreen {...props}
              sessionId = {this.state.sessionId}
              userId = {this.state.sessionId} />
            }}/>
            
          <Route path='/user_id/:userId/session_id/:sessionId'
            render={(props) => {
              return <HomeScreen {...props} 
              sessionId = {this.state.sessionId}
              userId = {this.state.sessionId}
              setSession = {this.setSession}/>
            }}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
