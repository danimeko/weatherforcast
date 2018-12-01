import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
