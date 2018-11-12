import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      salary: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitEmployee = () => {
    const { firstName, lastName, email, salary } = this.state;
    axios
      .post("/api/addEmployee", { firstName, lastName, email, salary })
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
  };
  render() {
    const { firstName, lastName, email, salary } = this.state;
    console.log(firstName, lastName, email, salary);
    return (
      <div>
        <h1>Create New Record</h1>
        <desc>
          Please fill this form and submit to add employee record to the
          database.
        </desc>
        <div className="employee-form">
          <label>
            First Name
            <input
              value={firstName}
              name="firstName"
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            Last Name
            <input
              value={lastName}
              name="lastName"
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            Email
            <input
              value={email}
              name="email"
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </label>
          <label>
            Salary
            <input
              value={salary}
              name="salary"
              type="text"
              onChange={e => this.handleChange(e)}
            />
          </label>
          <button onClick={() => this.submitEmployee()}>Submit</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CreateEmployee;
