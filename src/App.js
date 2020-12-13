import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/navigation/sidebar/Sidebar';
import Dashboard from './components/Dashboard'
import Weather from './components/Weather'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <div style={{ height: "90px", width: "0px" }}></div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/weather" component={Weather} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
