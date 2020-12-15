import React, { Component } from 'react';
import { connect } from 'react-redux';
import { geolocated } from "react-geolocated";
import { getWeatherForecast } from '../../redux/Weather/actions'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap'

class Weather extends Component {

  constructor() {
    super();
    this.state = {
      searchEntry: '',
      searchQuery: '',
      loading: false,
    }
  }

  handleChange = (e) => {
    this.setState({
      searchEntry: e.target.value,
      loading: true
    })
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit(e)
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchQuery = this.state.searchEntry.toLowerCase()
    this.setState({
      searchQuery
    })
  }

  render() {

    return (
      <>
        <div className="page-heading">Weather Page</div>
        <div>Find the weather for any city</div>
        <div className="weather-container">
          <br></br>
          <input type="text" name="search" className="searchForm" placeholder="Search a City" onKeyPress={this.onKeyPress} onChange={e => this.handleChange(e)} />
          <Button variant="primary" className="searchButton" type="submit" onClick={e => this.handleSubmit(e)}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps, { getWeatherForecast, geolocated })(Weather)