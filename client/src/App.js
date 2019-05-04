import React, { Component } from "react";
import logo from "./NewLogo.png";
import "./App.css";
import Login from "./Models/Login";
import Navbar from "./Models/Navbar";
import Gif from "./Models/Gif";
import Overview from "./Models/Overview";

class App extends Component {
  render() {
    return(
      <div className="container">
        <span><Navbar/></span>
        {/* <Login/> */}
        <Overview/>
        <br/><br/><br/>
        <Gif/>
      </div>
    )
  }
}

export default App;
