import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            Finnish Weather Forcast{" "}
          </a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fevorites
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
