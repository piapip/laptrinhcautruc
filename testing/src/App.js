import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import HomeScreen from './containers/HomeScreen';
import ResultDetailedScreen from './containers/ResultDetailedScreen';
import ItemDetailedScreen from './containers/ItemDetailedScreen';
import axios from './axios';
import config from './config';

class App extends Component {   

  state = {}

  componentDidMount = () => {
    axios
      .get(`${config.BACKEND_NHOM9}/api/isLogin`)
      .then(data => {
        if(data.data.success === 1) {
          let sessionId = data.data.session.session_id
          let userId = data.data.session.user_id
          this.setSession(sessionId, userId)
        } 
      })
      .catch(error => console.log(error))
  } 

  setSession = (sessionId, userId) => {
    this.setState({ 
      sessionId: sessionId, 
      userId: userId })
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
