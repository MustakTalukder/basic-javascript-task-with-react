import React, { Component } from 'react'

class CurrentTime extends Component {

  state = {
    currrentHour: null,
    currentMinute: null,
    currentSecond: null,
    amPM: null,
    display: false
  }

timeToState = () => {
        let dateIs = new Date();
        let currrentHour = dateIs.getHours()
        let currentMinute = dateIs.getMinutes()
        let currentSecond = dateIs.getSeconds()

        let amPM = 'AM'

        if (currrentHour >= 12) {
            amPM = 'PM'
        }
        if (currrentHour >= 13) {
            currrentHour = currrentHour - 12;
        }
        if (currrentHour === 0) {
            currrentHour = 12;
        }

        this.setState({
            currrentHour,
            currentMinute,
            currentSecond,
            amPM,
            display: true
        })
}


  render() {
      
    let time = null
    if (this.state.display) {
      time = (
        <div>
              <h4 style={{ marginTop: '5px' }}>Current time is:</h4>
              <h4> {this.state.currrentHour} {this.state.amPM}: {this.state.currentMinute}: {this.state.currentSecond}</h4>
        </div>
      )
    }

    return (
      <div >
        <button className="btn btn-success" onClick={this.timeToState}>Current Time</button>
        {time}
      </div>
    )
  }
}
export default CurrentTime