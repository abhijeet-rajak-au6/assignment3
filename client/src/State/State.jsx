import React, { Component, Fragment } from "react";
import "../State/State.css";

class State extends Component {
  componentDidMount(){
    const { match } = this.props;
    console.log(match.path.replace("/","."))
    const link = document.querySelector(match.path.replace("/","."));
    const currentLink = document.querySelector(".active");
    console.log(currentLink);
    currentLink.classList.remove("active");
    link.classList.add("active")
  }
  render() {
    return (
      <Fragment>
        <div className="state-content">
          {/* <div className="add-state-content"> */}
          <div className="add-state-content">
            <div className="add-state">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </div>

            <div className="add-state-form">
              <input
                type="text"
                name="statename"
                placeholder="Enter State Name"
              />
              <button onClick={this.handleLogin} className="btn ">
                Add state
              </button>
            </div>
          </div>
          {/* repeat hoga */}
          <div className="display-state-content">
            <div className="display-state">
              <div className="disp-state">1 </div>
            </div>

            <div className="display-state-form">
              <h4>Uttar Pradesh</h4>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Fragment>
    );
  }
}

export default State;
