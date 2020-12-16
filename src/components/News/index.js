import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { Nav, Navbar } from 'react-bootstrap';
import { getTopNews } from '../../redux/News/actions'
import NewsShow from './NewsShow'

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
        {match.params?.section === undefined ?
          <div style={{ marginBottom: "40px" }}>
            Top New York Times Articles on Art!
          </div>
          :
          <div style={{ marginBottom: "40px" }}>
            Top New York Times Articles on {match.params?.section}!
          </div>
        }
        <Navbar id="news-category-nav">
          <Nav className="mr-auto">
            <Link to="/news/arts" onClick={e => this.changeToSection(e)}> Art </Link>
          </Nav>
          <Nav className="mr-auto">
            <Link to="/news/business" onClick={e => this.changeToSection(e)}> Business </Link>
          </Nav>
          <Nav className="mr-auto">
            <Link to="/news/science" onClick={e => this.changeToSection(e)}> Science </Link>
          </Nav>
          <Nav className="mr-auto">
            <Link to="/news/technology" onClick={e => this.changeToSection(e)}> Tech </Link>
          </Nav>
          <Nav className="mr-auto">
            <Link to="/news/politics" onClick={e => this.changeToSection(e)}> Politics </Link>
          </Nav>
        </Navbar>
        <div style={{ height: "40px" }}></div>
        {news.results.map((article, index) => {
          return (
            <NewsShow key={index} article={article} />
          )
        })}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.news.news
  }
}

export default compose(withRouter, connect(mapStateToProps, { getTopNews }))(News)