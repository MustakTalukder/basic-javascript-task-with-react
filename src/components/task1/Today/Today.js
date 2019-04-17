import React, { Component } from 'react'

class Today extends Component {

  state = {
    Today: null,
    display: false
  }

  dateToState = () => {
    let dateIs = new Date();
    let Today = dateIs.getDay()


    let TodayName = ''

    switch (Today) {
      case (0): {
        TodayName = 'Sunday'
        break;
      }
      case (1): {
        TodayName = 'Monday'
        break;
      }
      case (2): {
        TodayName = 'Tuesday'
        break;
      }
      case (3): {
        TodayName = 'Wednesday'
        break;
      }
      case (4): {
        TodayName = 'Thrusday'
        break;
      }
      case (5): {
        TodayName = 'Friday'
        break;
      }
      default: {
        TodayName = 'Error'
      }
    }

    this.setState({
      Today: TodayName,
      display: true
    })
    
  }

  render() {
      
    let day = null
    if (this.state.display) {
      day = (
        <div>
          <h4>Today is: {this.state.Today}</h4>
       </div>
      )
    }

    return (
      <div>
        <button className="btn btn-success" onClick={this.dateToState}>Today Name</button>
        {day}
      </div>
    )
  }
}
export default Today