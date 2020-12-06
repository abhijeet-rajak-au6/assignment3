import React, { Component, Fragment } from "react";
import "../Dashboard/DashBoard.css";

class DashBoard extends Component {
  componentDidMount() {
    const nav = document.querySelector(".mynav");
    nav.style.display = "flex";
    const body = document.querySelector('body');
    body.style.backgroundColor="#F8F8F8";
    const { match } = this.props;
    console.log(match.path.replace("/","."))
    const link = document.querySelector(match.path.replace("/","."));
    console.log(link);
    const currentLink = document.querySelector(".active");
    console.log(currentLink);
    currentLink.classList.remove("active");
    link.classList.add("active")
  }
  render() {
    return (
      <Fragment>
        <div className="dashboard-container">
          <div className="user-info">
            <p>
              <span>Name: </span> Ramesh Prakash
            </p>
            <p>
              <span>Organization: </span> Bal Vikas
            </p>
            <p>
              <span>Designation: </span> Clustur Coordinator
            </p>
          </div>
          <div className="hero-image"></div>
        </div>
      </Fragment>
    );
  }
}

export default DashBoard;
