import React, { Component } from 'react'
import { Image } from 'react-bootstrap'
import { randomAffirmations } from '../Misc/MiscFunctions'

class Wellness extends Component {

  constructor() {
    super()
    this.state = {
      minutes: 1,
      seconds: 0,
    }
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { minutes, seconds } = this.state

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {

    let { minutes, seconds } = this.state

    return (
      <>
        <div className="page-heading">Daily Breathing Exercise</div>
        { minutes === 0 && seconds === 0
          ? <h2 className="page-subheading"> You've Completed It! Great Job! </h2> :
          <div>
            <h2 className="page-subheading"> Time Remaining: </h2>
            <h2 className="page-subheading">{minutes}:{seconds < 10 ? `0${seconds}` : seconds} </h2>
          </div>
        }
        <p>Each Back and Forth is an Inhale and Exhale</p>
        <Image src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="loader" style={{ margin: "0 auto" }} />
      </>
    )
  }
}

export default Wellness