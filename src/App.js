import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Station from "./components/Station";
import { BrowserRouter, Route } from "react-router-dom";
import Fevourite from "./components/Fevourite";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Search} />
            <Route exact path="/fevourite" component={Fevourite} />
            <Route exact path="/station/:id" component={Station} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
