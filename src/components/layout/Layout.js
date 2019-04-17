import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar"
          style={{
            marginTop: "100px",
            backgroundColor: "#28a745",
            color: "white"
          }}
        >
          <span className="navbar-brand h1" style={{ textAlign: "center" }}>
            All Tasks
          </span>
        </nav>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2
                  className="card-title bg-dark text-white"
                  style={{ backgroundColor: "#fff" }}
                >
                  Task 1
                </h2>
                <p
                  className="card-text bg-light text-dark"
                  style={{ padding: "2px" }}
                >
                  Write a JavaScript program to display the current day and time
                  in the following format.Sample Output : Today is : Tuesday
                  Current time is : 10 PM : 30 : 38
                </p>
                <button
                  name="t1"
                  onClick={this.props.buttonPressed}
                  className="btn btn-primary"
                >
                  Check
                </button>
              </div>
            </div>
          </div>

          {/* // Tast 2  */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2
                  className="card-title bg-dark text-white"
                  style={{ backgroundColor: "#fff" }}
                >
                  Task 2
                </h2>
                <p
                  className="card-text bg-light text-dark"
                  style={{ padding: "2px" }}
                >
                  Write a JavaScript program to get the current date. Expected
                  Output : mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
                </p>
                <button
                  name="t2"
                  onClick={this.props.buttonPressed}
                  className="btn btn-primary"
                >
                  Check
                </button>
              </div>
            </div>
          </div>

          {/* // Tast 3  */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2
                  className="card-title bg-dark text-white"
                  style={{ backgroundColor: "#fff" }}
                >
                  Task 3
                </h2>
                <p
                  className="card-text bg-light text-dark"
                  style={{ padding: "2px" }}
                >
                  Write a JavaScript function that reverse a number. Go to the
                  editor Example x = 32243; Expected Output : 34223
                </p>
                <button
                  name="t3"
                  onClick={this.props.buttonPressed}
                  className="btn btn-primary"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
          {/* // Tast 4  */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2
                  className="card-title bg-dark text-white"
                  style={{ backgroundColor: "#fff" }}
                >
                  Task 4
                </h2>
                <p
                  className="card-text bg-light text-dark"
                  style={{ padding: "2px" }}
                >
                  Write a JavaScript function that accepts a string as a
                  parameter and converts the first letter of each word of the
                  string in upper case. Example string : 'the quick brown fox'
                  Expected Output : 'The Quick Brown Fox'
                </p>
                <button
                  name="t4"
                  onClick={this.props.buttonPressed}
                  className="btn btn-primary"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
          {/* // Tast 5  */}
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2
                  className="card-title bg-dark text-white"
                  style={{ backgroundColor: "#fff" }}
                >
                  Task 5
                </h2>
                <p
                  className="card-text bg-light text-dark"
                  style={{ padding: "2px" }}
                >
                  Write a JavaScript function that accept a list of country
                  names as input and returns the longest country name as output.
                  Sample function : Longest_Country_Name(["Australia",
                  "Germany", "United States of America"]) Expected output :
                  "United States of America"
                </p>
                <button
                  name="t5"
                  onClick={this.props.buttonPressed}
                  className="btn btn-primary"
                >
                  Check
                </button>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default Layout;
