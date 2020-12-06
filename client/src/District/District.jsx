import React, { Component, Fragment } from "react";
import "../District/District.css";

class District extends Component {
  componentDidMount() {
    const { match } = this.props;
    console.log(match.path.replace("/", "."));
    const link = document.querySelector(match.path.replace("/", "."));
    const currentLink = document.querySelector(".active");
    console.log(currentLink);
    currentLink.classList.remove("active");
    link.classList.add("active");
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
              <select className="ddl-state" name="Select State Name" id="cars">
                <option>Select State Name</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <input
                type="text"
                name="statename"
                placeholder="Enter District Name"
              />
              <button onClick={this.handleLogin} className="btn ">
                Add District
              </button>
            </div>
          </div>
          {/* repeat hoga */}
          <div className="display-state-content">
            <div className="display-state">
              <div className="disp-state">1 </div>
            </div>

            <div className="display-state-form">
              <div className="state-district">
                <h4>Mau</h4>
                <h4>Uttar Pradesh</h4>
              </div>
              <i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Fragment>
    );
  }
}
export default District;
