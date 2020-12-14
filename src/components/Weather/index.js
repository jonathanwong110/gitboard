import React, { Component } from 'react';
import { connect } from 'react-redux';
import { geolocated } from "react-geolocated";
import { getWeatherForecast } from '../../redux/Weather/actions'

class Weather extends Component {

  constructor(props) {
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
    }
  }

  position = async () => {
    await navigator.geolocation.getCurrentPosition(
      position => this.setState({ 
        latitude: position.coords.latitude, 
        longitude: position.coords.longitude
      }), 
      err => console.log(err)
    );
  }

  componentDidMount() {
    this.position()
    // this.props.getWeatherForecast(this.state.latitude, this.state.longitude)
  }

  render() {

    if (this.state.latitude || this.state.longitude === null ) {
      console.log(this.state)
    }

    return (
      <div className="page-heading">Weather Page</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather
  }
}

export default connect(mapStateToProps, { getWeatherForecast, geolocated })(Weather)