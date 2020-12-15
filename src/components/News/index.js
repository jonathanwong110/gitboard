import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTopNews } from '../../redux/News/actions'
import NewsShow from './NewsShow'

class News extends Component {

  componentDidMount() {
    this.props.getTopNews()
  }

  render() {

    let { news } = this.props

    if (news && news.status === undefined) {
      return <div>There are no news</div>
    }

    return (
      <>
        <div className="page-heading">News Page</div>
        {news.results.map((article, index) => {
          return (
            <NewsShow key={index} article={article}/>
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

export default connect(mapStateToProps, { getTopNews })(News)