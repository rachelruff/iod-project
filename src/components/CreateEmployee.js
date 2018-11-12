import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

class CreateEmployee extends Component {
  render() {
    return (
      <div>
        <h1>Create New Record</h1>
        <desc>
          Please fill this form and submit to add employee record to the
          database.
        </desc>
        <EmployeeForm />
      </div>
    );
  }
}

export default CreateEmployee;
