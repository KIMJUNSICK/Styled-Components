import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <button className="btn btn-success">CLICK!</button>
        <button className="btn btn-fail">CLICK!</button>
      </Fragment>
    );
  }
}

export default App;
