import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      salary: ""
    };
  }

  componentDidMount() {
    this.props.id ? this.setEmployee(this.props.id) : null;
  }

  setEmployee = id => {
      console.log(id)
    axios
      .get(`/api/getEmployee/${id}`)
      .then(resp => {
          console.log(resp)
        this.setState({
          firstName: resp.data[0].FirstName,
          lastName: resp.data[0].LastName,
          email: resp.data[0].Email,
          salary: resp.data[0].Salary
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //if updateing and id exists, do a put request, if a new employee use post

  submitEmployee = () => {
    const { firstName, lastName, email, salary } = this.state;
    this.props.id
      ? axios
          .put(`/api/updateEmployee/${this.props.id}`, {
            firstName,
            lastName,
            email,
            salary
          })
          .then(resp => console.log(resp))
          .catch(err => console.log(err))
      : axios
          .post("/api/addEmployee", { firstName, lastName, email, salary })
          .then(resp => console.log(resp))
          .catch(err => console.log(err));
  };
  render() {
    const { firstName, lastName, email, salary } = this.state;
    console.log(firstName, lastName, email, salary);
    return (
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
    );
  }
}

export default EmployeeForm;
