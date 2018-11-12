import React, { Component } from 'react';

class ViewEmployee extends Component {
    componentDidMount(){
        console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                View
            </div>
        );
    }
}

export default ViewEmployee;