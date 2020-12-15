import React, { Component } from 'react';
import { connect } from 'react-redux';
import { geolocated } from "react-geolocated";
import { getWeatherForecast } from '../../redux/Weather/actions'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Image } from 'react-bootstrap'

class Weather extends Component {

  constructor() {
    super();
    this.state = {
      searchEntry: '',
      searchQuery: '',
      loading: false,
    }
  }

  componentDidMount() {
    this.props.getWeatherForecast()
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

  giveAdvice = (degrees) => {
    if (degrees < 40) {
      return <div> Bundle up. It's gonna be freezing! </div>
    } else if (degrees >= 40 && degrees < 60) {
      return <div> Wear something warm. It's gonna be chilly! </div>
    } else if (degrees >= 60 && degrees <= 80) {
      return <div> The weather's perfect! </div>
    } else if (degrees > 81) {
      return <div> It's gonna be be hot today. Stay cool! </div>
    }
  }

  render() {

    let { weather } = this.props

    if (weather && weather?.main === undefined) {
      return <div>There is no weather here</div>
    }

    return (
      <>
        {console.log(weather)}
        <div className="page-heading">Weather Page</div>
        <div>Find the weather for any city</div>
        <br></br>
        <div className="weather-container">
          <br></br>
          <input type="text" name="search" className="searchForm" placeholder="Search a City" onKeyPress={this.onKeyPress} onChange={e => this.handleChange(e)} />
          <Button variant="primary" className="searchButton" type="submit" onClick={e => this.handleSubmit(e)}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
          <br></br>
          <Image src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} style={{ height: "75px", width: "75px" }} />
          <div>{weather.main.temp} &deg;F </div>
          <div>Low {weather.main.temp_min} &deg;F  / Low {weather.main.temp_max} &deg;F </div>
          <div>{this.giveAdvice(weather.main.temp)}</div>
          <div>{weather.name}, {weather.sys.country}</div>
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