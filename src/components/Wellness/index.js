import React, { Component } from 'react'
import { Image } from 'react-bootstrap'

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
        <div className="page-subheading">Each Back and Forth is an Inhale and Exhale</div>
        <br></br>
        { minutes === 0 && seconds === 0
          ?
          <div>
            <div className="page-subheading">You've Completed It! Great Job! </div>
          </div> :
          <div>
            <div className="page-subheading"> Time Remaining: </div>
            <div className="page-subheading">{minutes}:{seconds < 10 ? `0${seconds}` : seconds} </div>
          </div>
        }
        <Image src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif" alt="loader" style={{ margin: "0 auto" }} id="wellness-gif" />
      </>
    )
  }

}

export default Wellness