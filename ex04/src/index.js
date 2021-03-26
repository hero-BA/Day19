// src/index.js

import React, { Component } from "react"; // Change this line
import ReactDom from "react-dom";
import "./index.css";

// add the following code below this line

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Padawans!</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
