import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStocks } from '../../redux/Stocks/actions'
import { Container, Row, Col } from 'react-bootstrap'

class Stocks extends Component {

  componentDidMount() {
    this.props.getStocks("AMZN")
  }

  render() {

    let { stocks } = this.props

    let stockFiveMinsIntervalInfo = "Time Series (Daily)"

    let metaData = "Meta Data"
    let stockSymbol = "2. Symbol"
    let lastRefreshed = "3. Last Refreshed"
    let closingPriceKey = "4. close"

    if (stocks[stockFiveMinsIntervalInfo] === undefined) {
      return <div>There are no stocks here</div>
    }

    let closingTimeKeyForSecondToLastDate = Object.keys(stocks[stockFiveMinsIntervalInfo])[1]
    let exactClosingPriceValueForSecondToLastDate = stocks[stockFiveMinsIntervalInfo][closingTimeKeyForSecondToLastDate][closingPriceKey]
    let roundedClosingPriceValueForSecondToLastDay = Math.round(exactClosingPriceValueForSecondToLastDate * 100) / 100

    let closingTimeKeyForLastDate = Object.keys(stocks[stockFiveMinsIntervalInfo])[0]
    let exactClosingPriceValueForLastDate = stocks[stockFiveMinsIntervalInfo][closingTimeKeyForLastDate][closingPriceKey]
    let roundedClosingPriceValueForLastDate = Math.round(exactClosingPriceValueForLastDate * 100) / 100

    // let upOrDownInitialPercentageDifference = ((exactClosingPriceValueForSecondToLastDate/exactClosingPriceValueForLastDate) - 1)

    // let upOrDownFinalPercentageDifference = Math.round(upOrDownInitialPercentageDifference * 100) / 100

    // console.log(upOrDownFinalPercentageDifference)

    let upOrDownPlusMinusDifference = roundedClosingPriceValueForLastDate - roundedClosingPriceValueForSecondToLastDay

    let roundedupOrDownPlusMinusDifference = Math.round(upOrDownPlusMinusDifference * 100) / 100

    return (
      <>
        <div className="page-heading">Stocks</div>
        <div>As of {stocks[metaData][lastRefreshed]}</div>
        <br></br>
        <Container id="stocks-container">
          <Row>
            <Col className="stocks-col-title">
              Company
              </Col>
            <Col className="stocks-col-title" style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>
              Current Price
              </Col>
            <Col className="stocks-col-title">
              Gains / Losses
            </Col>
          </Row>
          <Row>
            <Col className="stocks-col-info">
              {stocks[metaData][stockSymbol]}
            </Col>
            <Col className="stocks-col-info" style={{ borderLeft: "1px solid white", borderRight: "1px solid white" }}>
              ${roundedClosingPriceValueForLastDate}
            </Col>
            {roundedupOrDownPlusMinusDifference < 0 ?
              <Col className="stocks-col-info">
                <div style={{ backgroundColor: "red", maxWidth: "125px", margin: "0 auto" }}>
                  {roundedupOrDownPlusMinusDifference}
                </div>
              </Col>
              : <Col className="stocks-col-info">
                <div style={{ backgroundColor: "green", maxWidth: "125px", margin: "0 auto" }}>
                  +{roundedupOrDownPlusMinusDifference}
                </div>
              </Col>
            }
          </Row>
        </Container>
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