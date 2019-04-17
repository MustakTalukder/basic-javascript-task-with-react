import React, { Component } from 'react';
import './App.css';

//All Components
import Task1 from './components/task1/Task1'
import CurrentDate from './components/task2/CurrentDate';
import ReverseNumber from './components/task3/ReverseNumber';
import UpperCase from './components/task4/UpperCase';
import LongestCountryName from './components/task5/LongestCountryName';
import Layout from './components/layout/Layout';
import Footer from './components/layout/Footer';



class App extends Component {

  state = {
    taskNumber: null,
    display: false,
    task: null
  }


  buttonPressed = e => {
    let buttonName = e.target.name;
    console.log(buttonName);

    this.setState({
      taskNumber: buttonName,
      display: true
    })
    
  }
  displayHandler = () => {
    this.setState({
      display: false,
      task: null
    })
  }


  render() {
    let task = this.state.task

    if (this.state.display) {

      let { taskNumber } = this.state
        
      if (taskNumber === 't1') {
        task = (
          <Task1 />
        )
      } else if (taskNumber === 't2') {
        task = (
          <CurrentDate />
        )
      } else if (taskNumber === 't3') {
        task = (
          <ReverseNumber />
        )
          
      } else if (taskNumber === 't4') {
        task = (
          <UpperCase />
        )
          
      } else if (taskNumber === 't5') {
        task = (
          <LongestCountryName />
        )
          
      }
    }


    return (

      <div className="App container" >
        <Layout buttonPressed={this.buttonPressed} />
        
        
        <div style={{
          margin: 'auto',
          width: '50%',
          padding: '20px',
          
        }}>
          <div className="row">
            <h1 className="p-3 mb-2 bg-info text-white col">Playground</h1>
            <button className="p-3 mb-2 btn btn-warning text-white" onClick={this.displayHandler}>Clear</button>
          </div>
          
        {task}
        </div>
     

        <Footer/>
      </div>
    );
  }
}

export default App;
