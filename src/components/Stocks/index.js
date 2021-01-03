import React, { Component } from 'react';

class Stocks extends Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js"
    script.async = true;
    script.innerHTML = JSON.stringify({})
    document.getElementById("stocks-container").appendChild(script);
  }

  render() {

    return (
      <>
        <div className="page-heading">Stocks</div>
        <br></br>
        <div id="stocks-container">
          <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget">
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default Stocks