import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";

class UpdateEmployee extends Component {
  render() {
      console.log(this)
    return (
      <div>
        <h1>Update Employee</h1>
        <desc>
          Please edit the input values and submit to update the record.
        </desc>
        <EmployeeForm 
        id={this.props.match.params.id} 
        />
      </div>
    );
  }
}

export default UpdateEmployee;
