import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import "../Navbar/Navbar.css";

class Navbar extends Component {
  render() {
    console.log(this.props.match);
    return (
      <Fragment>
        <nav className="mynav">
          <div className="nav-logo">LOGO</div>
          <ul className="topnav">
            <li>
              <Link to="/dashboard" className="active dashboard">
                Home
              </Link>
            </li>
            <li>
              <Link className="addstate" to="/addstate">
                State
              </Link>
            </li>
            <li>
              <Link className="district" to="/district">District</Link>
            </li>
            <li>
              <Link className="child" to="/child">Child</Link>
            </li>
            <li>
              <i
                style={{ color: "rgb(59,127,58)" }}
                class="fas fa-power-off"
              ></i>
              <Link className="logout" to="#">Logout</Link>
            </li>
          </ul>
        </nav>

        <span className="target"></span>
      </Fragment>
    );
  }
}
export default withRouter(Navbar);
