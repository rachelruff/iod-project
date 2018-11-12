import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeTable from "./EmployeeTable";

class HomePage extends Component {
  componentDidMount() {
    axios
      .get("/api/tester")
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        Employee Details{" "}
        <Link to='/create'>
          <button>Add New Employee</button>
        </Link>
        <EmployeeTable />
      </div>
    );
  }
}

export default HomePage;
