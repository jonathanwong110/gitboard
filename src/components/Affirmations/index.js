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
        <div id="affirmations-page">
          <div id="affirmations-container">
            <div className="page-heading">Positive Affirmations</div>
            <div className="page-subheading"><i>Feel better, be better</i></div>
            <div>
              <button onClick={e => this.nextAffirmation(e)} id="affirmations-button">
                Give me an affirmation!
              </button>
            </div>
            <div className="page-subheading" id="affirmations-content">{this.state.affirmation}</div>
          </div>
        </div>
      </>
    )
  }

}

export default Affirmations