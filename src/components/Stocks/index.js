import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStocks } from '../../redux/Stocks/actions'

class Stocks extends Component {

  // componentDidMount() {
  //   this.props.getStocks()
  // }

  render() {

    return (
      <>
        <div className="page-heading">Stocks</div>
      </>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks.stocks
  }
}

export default connect(mapStateToProps, { getStocks })(Stocks)