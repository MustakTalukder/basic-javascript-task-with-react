import React, { Component } from 'react'
import Today from './Today/Today'; 
import CurrentTime from './CurrentTime/CurrentTime';



class Task1 extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
        <Today />
            </div>
        
        <div className="col">
        <CurrentTime/>
            </div>


      </div>
    )
  }
}

export default Task1
