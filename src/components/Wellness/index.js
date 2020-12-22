import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class Wellness extends Component {

  render() {

    return (
      <div className="page-heading">Wellness</div>
    )
  }
}

export default compose(withRouter, connect(null, {}))(Wellness)