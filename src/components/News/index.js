import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { Col, Container, Row } from 'react-bootstrap';
import { getTopNews } from '../../redux/News/actions'
import NewsShow from './NewsShow'
import { capitalizeFirstLetter } from '../Display/DisplayFunctions'

class News extends Component {

  componentDidMount() {
    let { match } = this.props
    if (match.params.section === undefined) {
      this.props.getTopNews('arts')
    } else {
      this.props.getTopNews(match.params.section)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match !== prevProps.match) {
      this.props.getTopNews(this.props.match.params.section)
    }
  }

  changeToSection = (e) => {
    let { match } = this.props
    if (match.params && match.params.section) {
      this.props.getTopNews(match.params.section)
    }
  }

  render() {

    let { news, match } = this.props

    if (news && news.status === undefined) {
      return <div>There are no news</div>
    }

    return (
      <>
        <div className="page-heading">News</div>
        {match.params?.section === undefined || match.params?.section === 'arts' ?
          <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "40px" }}>
            Top New York Times Articles on Art!
          </div>
          :
          <div style={{ fontSize: "15px", fontWeight: "600", marginBottom: "40px" }}>
            Top New York Times Articles on {capitalizeFirstLetter(match.params?.section)}!
          </div>
        }
        <Container id="news-section-nav">
          <Row>
            <Col className="mr-auto">
              <Link to="/news/arts" onClick={e => this.changeToSection(e)}>
                <button className="news-section-button">
                  Art
                </button>
              </Link>
            </Col>
            <Col className="mr-auto">
              <Link to="/news/business" onClick={e => this.changeToSection(e)}>
                <button className="news-section-button">
                  Business
                </button>
              </Link>
            </Col>
            <Col className="mr-auto">
              <Link to="/news/science" onClick={e => this.changeToSection(e)}>
                <button className="news-section-button">
                  Science
                </button>
              </Link>
            </Col>
            <Col className="mr-auto">
              <Link to="/news/technology" onClick={e => this.changeToSection(e)}>
                <button className="news-section-button">
                  Tech
                </button>
              </Link>
            </Col>
            <Col className="mr-auto">
              <Link to="/news/politics" onClick={e => this.changeToSection(e)}>
                <button className="news-section-button">
                  Politics
                </button>
              </Link>
            </Col>
          </Row>
        </Container>
        <div style={{ height: "40px" }}></div>
        {news.results.map((article, index) => {
          return (
            <NewsShow key={index} article={article} />
          )
        })}
        <div style={{ height: "100px" }}></div>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news
  }
}

export default compose(withRouter, connect(mapStateToProps, { getTopNews, capitalizeFirstLetter }))(News)