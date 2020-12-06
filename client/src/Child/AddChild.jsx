import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../Child/AddChild.css";

class AddChild extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle submit");
  };
  render() {
    return (
      <div className="form-container">
        <form className="custom-form" onSubmit={this.handleSubmit}>
          <div className="logo-container form-element">
            <Link style={{color:"#3B7F3A"}} to="/child"><i class="fas fa-arrow-left"></i> </Link> <p>ADD CHILD</p>
          </div>
          <input
            className="form-element"
            type="text"
            name="name"
            placeholder="Name"
          />
          <select className="ddl-gender form-element" name="gender" id="gender">
            <option disabled selected value="0">
              Sex
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            className="date-of-birth form-element"
            type="date"
            name="date"
            placeholder="Date of Birth"
          />
          <input
            className="form-element"
            type="text"
            name="fatherName"
            placeholder="Father's Name"
          />
          <input
            className="form-element"
            type="text"
            name="motherName"
            placeholder="Mother's Name"
          />
          <select className="ddl-state form-element" name="state" id="state">
            <option value="0" disabled selected>
              State
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>

          <select
            className="ddl-district form-element"
            name="district"
            id="district"
          >
            <option style={{ color: "grey" }} disabled selected value="0">
              District
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>

          <button className="form-element btn-upload">Take a Photo/ Upload</button>
          <button className="form-element btn-submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default AddChild;
