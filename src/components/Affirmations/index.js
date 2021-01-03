import React, { Component } from 'react';
import { randomAffirmations } from '../Misc/MiscFunctions'

class Affirmations extends Component {

  constructor() {
    super()
    this.state = {
      affirmation: randomAffirmations(),
    }
  }

  nextAffirmation = (e) => {
    let selectedAffirmation = randomAffirmations()
    this.setState({
      affirmation: selectedAffirmation
    })
  }

  render() {

    return (
      <>
        <div className="page-heading">Affirmations</div>
        <div>
          <button onClick={e => this.nextAffirmation(e)} id="affirmations-button" style={{ width: "150px" }}>
            Another one!
          </button>
        </div>
        <div className="page-subheading">{this.state.affirmation}</div>
      </>
    )
  }

}

export default Affirmations