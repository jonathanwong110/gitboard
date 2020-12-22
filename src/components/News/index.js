import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getTopNews } from '../../redux/News/actions'
import NewsShow from './NewsShow'
import NewsCategory from './NewsCategory'
import { capitalizeFirstLetter } from '../Misc/MiscFunctions'

class News extends Component {

  componentDidMount() {
    let { match } = this.props
    if (match.params.section === undefined) {
      this.props.getTopNews('home')
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
        {match.params?.section === undefined || match.params?.section === 'home' ?
          <div className="page-subheading">
            View the Articles on New York Times' Front Page
          </div>
          :
          <div className="page-subheading">
            View the Top New York Times Articles on {capitalizeFirstLetter(match.params?.section)}!
          </div>
        }
        <NewsCategory match={match} changeToSection={this.changeToSection}/>
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