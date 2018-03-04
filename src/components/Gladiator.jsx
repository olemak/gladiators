import React, { Component } from "react";

class Gladiator extends Component {
    render() {
        return (
            <div className="gladiator">
                <h3>{this.props.name}</h3>
                {this.props.image ? <img src={this.props.image.url} /> : ""}
            </div>
        );
    }
}

export default Gladiator;
