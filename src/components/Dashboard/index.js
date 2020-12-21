import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getWeatherForecastFromLocation, getWeatherForecastFromSearch } from '../../redux/Weather/actions'
import { getTopNews } from '../../redux/News/actions'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Image } from 'react-bootstrap'
import { formatDate, randomAffirmations } from '../Misc/MiscFunctions'
import NewsShow from '../News/NewsShow'

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString().substring(0, 10),
    };
  }

  componentDidMount() {
    if (navigator.geolocation && localStorage.getItem('location')) {
      let coordinates = JSON.parse(localStorage.getItem('location'))
      this.props.getWeatherForecastFromLocation(coordinates.latitude, coordinates.longitude)
    }
    this.props.getTopNews('home')
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
    if (searchQuery.length !== 0) {
      this.props.getWeatherForecastFromSearch(searchQuery)
    } else {
      let coordinates = JSON.parse(localStorage.getItem('location'))
      this.props.getWeatherForecastFromLocation(coordinates.latitude, coordinates.longitude)
    }
  }

  getDayName = (number) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }

  getGreetingForTimeOfDay = () => {
    let timeOfDay = new Date()
    let hourOfDay = timeOfDay.getHours()
    if (hourOfDay > 0 && hourOfDay < 6) {
      return "Mornin' Sunshine"
    } else if (hourOfDay > 6 && hourOfDay < 12) {
      return "Good Morning"
    } else if (hourOfDay > 12 && hourOfDay < 17) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
  }

  render() {

    let today = new Date().getDay();
    let { weather, news } = this.props
    let articles = news.results

    if (news.results === null || articles === undefined) {
      return <div>No article to see</div>
    }

    let article = articles[0]

    return (
      <>
        <div className="page-heading">
          {this.getGreetingForTimeOfDay()}
        </div>
        <div className="page-subheading">{randomAffirmations()}</div>
        <br></br>
        <div className="container-fluid" id="dashboard-first-row">
          <div className="row row-cols-sm-2">
            <div className="col-sm">
              <div className="today-information">
                <br></br>
                <div id="today-day">
                  {this.getDayName(today)}
                </div>
                <div id="today-date">
                  {formatDate(this.state.date)}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="dashboard-weather-container">
                <br></br>
                {weather?.main !== undefined ?
                  <>
                    <Link to="/weather" id="dashboard-weather-link">
                      <div id="dashboard-weather-location">{weather.name}</div>
                      <Image src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} style={{ height: "75px", width: "75px", margin: "0 auto" }} />
                      <div className="weather-main-temp" id="dashboard-weather-main-temp">{weather.main.temp} &deg;F </div>
                      <br></br>
                    </Link>
                  </> :
                  <div>
                    <div style={{ fontSize: "15px" }}>Weather</div>
                    <br></br>
                    <Form onSubmit={e => this.handleSubmit(e)}>
                      <input type="text" name="search" className="searchForm" placeholder="Search a City" onKeyPress={this.onKeyPress} onChange={e => this.handleChange(e)} />
                      <Button variant="primary" className="searchButton" type="submit" onClick={e => this.handleSubmit(e)}>
                        <FontAwesomeIcon icon={faSearch} />
                      </Button>
                    </Form>
                    <br></br>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div id="dashboard-divider"></div>
        <NewsShow article={article} />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.weather,
    news: state.news.news
  }
}

export default compose(withRouter, connect(mapStateToProps, { getWeatherForecastFromLocation, getWeatherForecastFromSearch, getTopNews, formatDate, randomAffirmations }))(Dashboard)