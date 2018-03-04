import React, { Component } from "react";

class Gladiator extends Component {
    render() {
        return (
            <div className="gladiator">
                <h3>{this.props.gladiator.name}</h3>
            </div>
        );
    }
}

export default Gladiator;
