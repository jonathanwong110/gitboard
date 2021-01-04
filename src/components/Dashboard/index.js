import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getWeatherForecastFromLocation, getWeatherForecastFromSearch } from '../../redux/Weather/actions'
import { getTopNews } from '../../redux/News/actions'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Image } from 'react-bootstrap'
import { formatDate, getGreetingForTimeOfDay, getDayName } from '../Misc/MiscFunctions'
import NewsShow from '../News/NewsShow'
import MyCalendar from './MyCalendar'
import StockToolbar from './StockToolbar'

class Dashboard extends Component {

  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.state = {
      currentDate: new Date().toLocaleString().substring(0, 10),
    };
  }

  componentDidMount() {
    if (navigator.geolocation && localStorage.getItem("location")) {
      let coordinates = JSON.parse(localStorage.getItem("location"))
      this.props.getWeatherForecastFromLocation(coordinates.latitude, coordinates.longitude)
    }
    this.props.getTopNews("home")
    this.myInterval = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      })
    }, 1000)
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
    this.props.getWeatherForecastFromSearch(searchQuery)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
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
        <StockToolbar />
        <div className="page-heading"> {getGreetingForTimeOfDay()} </div>
        <br></br>
        <div className="container-fluid" id="dashboard-first-row">
          <div className="row row-cols-sm-2">
            <div className="col-sm">
              <div className="today-information">
                <br></br>
                <div id="today-day">
                  {new Date().toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}
                </div>
                <div id="today-date">
                  {formatDate(this.state.currentDate)}
                </div>
                <MyCalendar currentTime={this.state.currentTime} dayOfTheWeek={getDayName(today)} />
              </div>
            </div>
            <div className="col-sm">
              <div className="dashboard-weather-container">
                <br></br>
                {weather?.main !== undefined ?
                  <>
                    <Link to="/weather" id="dashboard-weather-link">
                      <div id="dashboard-weather-wrapper">
                        <div id="dashboard-weather-location">{weather.name}</div>
                        <Image src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + ".png"} style={{ height: "75px", width: "75px", margin: "0 auto" }} />
                        <div id="dashboard-weather-main-temp">{weather.main.temp} &deg;F </div>
                        <br></br>
                      </div>
                    </Link>
                  </> :
                  <div>
                    <div style={{ fontSize: "20px" }}>Weather</div>
                    <br></br>
                    <Form>
                      <div style={{ margin: "0 auto" }}>
                        <input type="text" name="search" className="search-form" placeholder="Search a City" onKeyPress={this.onKeyPress} onChange={e => this.handleChange(e)} />
                        <Button variant="primary" className="search-button" type="submit" onClick={e => this.handleSubmit(e)}>
                          <FontAwesomeIcon icon={faSearch} />
                        </Button>
                      </div>
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

export default compose(withRouter, connect(mapStateToProps, { getWeatherForecastFromLocation, getWeatherForecastFromSearch, getTopNews, formatDate, getGreetingForTimeOfDay, getDayName }))(Dashboard)