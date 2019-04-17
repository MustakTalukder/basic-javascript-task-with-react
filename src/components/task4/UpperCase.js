import React, { Component } from 'react'

const initialState = {
    texts: null,
    upperCase: null,
    display: false
}

class UpperCase extends Component {

    constructor() {
        super()

        this.myForm = React.createRef()

    }

    state = initialState

    changeHandler = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    submitHandler = e => {
        e.preventDefault()

         let tx = this.state.texts + ""
       
        let arr = tx.split(' ')
        let newArr = [];

        for (let x = 0; x < arr.length; x++){
            newArr.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1))
        }
        newArr = newArr.join(" ")
        


        let display = false
        if (newArr !== 'NULL') {
            display = true
        }
        
        this.setState({
            upperCase: newArr,
            display
        })

        this.myForm.current.reset()
    }
    

    render() {
        let uppertx = null;
        if (this.state.display){
            uppertx = (
            <h2>{this.state.upperCase}</h2>
        )}
      
    return (
      <div>
            <form ref={this.myForm} onSubmit={this.submitHandler}>

            <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Enter Your Text"
                        name="texts"
                        onChange={this.changeHandler}
                    />
            </div>
            <button className="btn btn-success" type="submit">Give me upper case</button>

            </form>
            {uppertx}
      </div>
    )
  }
}

export default UpperCase
