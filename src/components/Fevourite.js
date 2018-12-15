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
    let fev = Object.keys(localStorage).map(
      key => (fevA[key] = { id: key, name: localStorage.getItem(key) })
    );
    this.setState({ fevorites: fev });

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(fev) {
    let x = Object.keys(fev).map(key => ({
      id: fev[key]
    }));
    localStorage.removeItem(x[0].id);
    this.feacthLocalStorage();
  }
  backToStation(fev) {
    let id = fev.id;
    this.props.history.push(`station/${id}`);
  }

  render() {
    let { fevorites } = this.state;

    return (
      <div>
        <Header />
        {fevorites.length === 0 ? (
          <div>You haven't added fevorites city yet!</div>
        ) : (
          <div>
            <ul className="list-inline">
              {fevorites.map(fev => (
                <li key={fev.id}>
                  <div className="fevoritelist">
                    <div>
                      <button
                        className="cancelBut"
                        type="button"
                        onClick={() => this.handleDelete(fev)}
                      >
                        X
                      </button>
                      <span
                        className="listFev"
                        onClick={() => this.backToStation(fev)}
                      >
                        <h5> {JSON.parse(fev.name)[0].name} </h5>
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default Fevourite;
