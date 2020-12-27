import React, { Component } from 'react';
import { randomAffirmations } from '../Misc/MiscFunctions'

class Affirmations extends Component {

  render() {

    return (
      <>
        <div className="page-heading">Affirmations</div>
        <div className="page-subheading">{randomAffirmations()}</div>
      </>
    )
  }

}

export default Affirmations