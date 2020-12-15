import React, { Component } from 'react';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString().substring(0, 10),
    };
  }

  getDayName = (number) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
  }

  getGreetingForTimeOfDay = () => {
    let timeOfDay = new Date()
    let hourOfDay = timeOfDay.getHours()
    if (hourOfDay > 0 && hourOfDay < 6) {
      return "Mornin' Sunshine"
    } else if (hourOfDay > 6 && hourOfDay < 12) {
      return "Good Morning"
    } else if (hourOfDay > 12 && hourOfDay < 17) {
      return "Good Afternoon"
    } else {
      return "Good Evening"
    }
  }

  render() {

    let today = new Date().getDay();

    return (
      <>
        <div className="page-heading">{this.getGreetingForTimeOfDay()}</div>
        <div>
          {this.state.date}
        </div>
        <div style={{ fontSize: "20px" }}>
          Today is {this.getDayName(today)}!
        </div>
      </>
    )
  }
}

export default Dashboard