import React, { Component } from 'react'

class CurrentDate extends Component {
    state = {
        date: null,
        month: null,
        year: null,
        display: false
    }

    dateHandler = () => {
        let dateIs = new Date();
        let date = dateIs.getDate()
        let month = dateIs.getMonth()
        let year = dateIs.getFullYear()

        this.setState({
            date,
            month,
            year,
            display: true
        })
        
        
        
    }

    render() {
        let date = null
        if (this.state.display) {
            date = (
                <div>
                    <h4>mm-dd-yyyy: {this.state.month}-{this.state.date}-{this.state.year}</h4>
                    <h4>mm/dd/yyyy: {this.state.month}/{this.state.date}/{this.state.year}</h4>
                </div>
            )
        }
        return (
            <div>
                <h3>Click below for current date</h3>
                <button className="btn btn-success" onClick={this.dateHandler}>Current Date</button>
                {date}
        </div>
        )
    }
}

export default CurrentDate