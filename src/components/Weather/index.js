import React, { Component } from 'react';
import { connect } from 'react-redux';
import { geolocated } from "react-geolocated";
import { getWeatherForecast } from '../../redux/Weather/actions'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Image } from 'react-bootstrap'

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
    this.props.getWeatherForecast(searchQuery)
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

    return (
      <>
        <div className="page-heading">Weather</div>
        <div>Find the Weather For Any City</div>
        <br></br>
        <div className="weather-container">
          <br></br>
          <Form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" name="search" className="searchForm" placeholder="Search a City" onKeyPress={this.onKeyPress} onChange={e => this.handleChange(e)} />
            <Button variant="primary" className="searchButton" type="submit" onClick={e => this.handleSubmit(e)}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
          <br></br>
          {weather?.main !== undefined ?
            <>
              <Image src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} style={{ height: "75px", width: "75px" }} />
              <div style={{fontSize: "30px"}}>{weather.main.temp} &deg;F </div>
              <br></br>
              <div style={{fontSize: "25px"}}>Low {weather.main.temp_min} &deg;F  / Low {weather.main.temp_max} &deg;F </div>
              <br></br>
              <div style={{fontSize: "20px"}}>{this.giveAdvice(weather.main.temp)}</div>
              <br></br>
              <div style={{fontSize: "20px"}}>{weather.name}, {weather.sys.country}</div>
            </> : null
          }
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