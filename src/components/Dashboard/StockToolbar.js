import React, { Component } from 'react';

class StockToolbar extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js"
    script.async = false;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "Nasdaq 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "BTC/USD"
        }
      ],
      "colorTheme": "light",
      "isTransparent": false,
      "showSymbolLogo": true,
      "locale": "en"
    })
    this.myRef.current.appendChild(script);
  }

  render() {
    return (
      <div className="tradingview-widget-container stocks-toolbar" ref={this.myRef}>
        <div className="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}

export default StockToolbar