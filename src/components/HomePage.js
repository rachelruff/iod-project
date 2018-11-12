import React, { Component } from 'react';
import axios from "axios";

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
                
            </div>
        );
    }
}

export default HomePage;