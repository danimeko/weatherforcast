import React, { Component } from "react";

import Header from "./Header";
class Fevourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fevorites: []
    };
  }

  componentDidMount() {
    this.feacthLocalStorage();
  }

  feacthLocalStorage() {
    let fevA = [];
    let fev = Object.keys(localStorage).map(key => (fevA[key] = { id: key, name: localStorage.getItem(key) }));
    this.setState({ fevorites: fev });
  }

  render() {
    let { fevorites } = this.state;
    return (
      <div>
        <Header/>
      <div>
        <ul>
          {fevorites.map(fev => (
            <li key={fev.id}>
              <div className="fevoritelist">
                {fev.id}
                {fev.name}
                <button
                  type="button"
                  onClick={() => {
                    let x = Object.keys(fev).map(key => ({
                       id : fev[key]
                     }))
                    localStorage.removeItem(x[0].id);
                    this.feacthLocalStorage();
                  }}
                >
                  Remove Me!
                </button>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}

export default Fevourite;

