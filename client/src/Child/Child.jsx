import React, { Component } from "react";
import "../Child/Child.css";

class Child extends Component {
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
      <div>
        <button
          onClick={() => this.props.history.push("/addChild")}
          className="btn-add-child"
        >
          Add Child
        </button>
        <div style={{ padding: "0rem 4rem" }}>
          <div className="table-content bg-white">
            <div className="item">
              <span>Showing 1-4 of 4 entries</span>
              <span className="ml-auto d-block">Items per page</span>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Sex</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Father's Name</th>
                  <th scope="col">Mother's Name</th>
                  <th scope="col">State</th>
                  <th scope="col">District</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Child;
