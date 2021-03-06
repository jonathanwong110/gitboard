import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './components/Navigation/Sidebar';
import Dashboard from './components/Dashboard/index'
import Weather from './components/Weather/index'
import News from './components/News/index'
import Stocks from './components/Stocks/index'
import Wellness from './components/Wellness/index'
import Affirmations from './components/Affirmations/index'
const NotFound = () => (<div style={{ fontSize: "20px" }}>This page is not available</div>)

class App extends Component {

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let coordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        localStorage.setItem("location", JSON.stringify(coordinates))
      })
    }
  }

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' component={(props) => <Sidebar {...props} key={window.location.pathname} />} />
          <div style={{ height: "90px", width: "0px" }}></div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/weather" component={Weather} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/:section" component={News} />
            <Route exact path="/stocks" component={Stocks} />
            <Route exact path="/wellness" component={Wellness} />
            <Route exact path="/affirmations" component={Affirmations} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }

}

export default App
