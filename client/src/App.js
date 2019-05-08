import React, { Component } from "react";
import "./App.css";
import Login from "./models/Login";
import Navbar from "./models/Navbar";
import Gif from "./models/Gif";
import Overview from "./models/Overview";

class App extends Component {
  render() {
    return(
      <div className="container">
        <span><Navbar/></span>
        {/* <Login/> */}
        <Overview/>
        <Login/>
        <br/><br/><br/>
        <Gif/>
      </div>
    )
  }
}

export default App;
