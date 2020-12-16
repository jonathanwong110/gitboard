import React, { Component } from 'react';
import { connect } from 'react-redux';

class Stocks extends Component {

  render() {

    return (
      <>
        <div className="page-heading">Stocks</div>
      </>
    )
  }

}

export default connect(null, {})(Stocks)