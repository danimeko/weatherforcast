import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Finnish Weather Forcast
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/fevourite">
                Fevorites
              </Link>
            </li>
          </ul>
        </nav>
        <br />
      </div>
    );
  }
}

export default Header;
