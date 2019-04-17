import React, { Component } from 'react'

const initialState = {
    name: null,
    countrys: [],
    longestCountryName: null,
    display: false
    
}

class LongestCountryName extends Component {

    constructor() {
        super()

        this.myForm = React.createRef()
    }

    state = initialState

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        let countrys = [...this.state.countrys]
        let newName = this.state.name

       
        if (newName === null) {
            alert('PLease enter a country name')
        } else if (newName[0] === "") {
            alert('PLease enter a country name')
        }
        else {
            countrys.push(newName)

            this.setState({
                countrys
            })
        }
        

        this.myForm.current.reset()

    }

    longestNamehandler = () => {
        let mx = 0;
        let longestName = 'Enter name please'

        this.state.countrys.map(country => {
            let temp = country + ""
            let len = temp.length
            if (len > mx) {
                mx = len
                longestName = country
            }
        })

        this.setState({
            longestCountryName: longestName,
            display: true
        })
        
    }



    render() {
        let longestName = null
        if (this.state.display) {
            longestName = (
                <div>
                    <h4>Longest Country Name is: </h4>
                    <h4>{this.state.longestCountryName}</h4>
                </div>

            )
        }
      
    return (
      <div>
            <form ref={this.myForm}  onSubmit={this.submitHandler}>
                <div className="form-row">
                <input
                    type="text"
                    onChange={this.changeHandler}
                    name='name'
                    className="form-control col"
                />
                <button className="btn btn-success" >Add List</button>
                </div>
            </form>

            <ul class="list-group">
                {this.state.countrys.map(country => <li class="list-group-item">{country}</li>)}
            </ul>
            

            <button className="btn btn-success" onClick={this.longestNamehandler}>Longest Country Name</button>
            {longestName}
      </div>
    )
  }
}

export default LongestCountryName
