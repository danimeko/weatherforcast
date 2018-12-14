import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
class CityForcast extends Component {
  render() {
    const { weather, city } = this.props;
    return (
      <Fragment>
        <Header />
        <div>
          <ul>
            <span>City :-{city}</span>
            {Object.keys(weather).map(key => (
              <li key={key}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{weather[key].time}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Temperature
                    </h6>
                    <p className="card-text">{weather[key].Temperature}</p>

                    <Link to="/Fevourite" className="card-link">
                      Add to fevorite
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default CityForcast;
