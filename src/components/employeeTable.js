import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Employees.css";

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get("/api/getAllEmployees").then(arr => {
      console.log("hit", arr);
      this.setState({
        employees: arr.data
      });
      // .catch(err => console.log(err));
    });
  }
  render() {
    const { employees } = this.state;
    console.log(employees);
    return (
      <div>
        <table className="employee-table">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Salary</th>
            <th>Actions</th>
            <th />
          </tr>
          {employees.map((emp, index) => {
            return (
              <tr key={index}>
                <td>{emp.Id} </td>
                <td>
                  {emp.FirstName} {emp.LastName}
                </td>
                <td>{emp.Email}</td>
                <td>{emp.Salary}</td>
                <td>
                  <Link to={`/view/${emp.Id}`}>
                    <button>View</button>
                  </Link>
                  <Link to={`/update/${emp.Id}`}>
                    <button>Update</button>
                  </Link>

                  <button onClick={() => {this.deleteEmployee(emp.Id)}}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
