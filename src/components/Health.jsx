import React, { PureComponent } from "react";

export class Health extends PureComponent {
    hitPoints = [0, 1, 2, 3, 4, 5];

    render() {
        return (
            <ul className={`${this.props.className} health__list`}>
                {this.hitPoints.map((count, i) => (
                    <li
                        className={`health__point health__point--${
                            i < this.props.count ? "full" : "empty"
                        }`}
                    />
                ))}
            </ul>
        );
    }
}

Health.propTypes = {};

export default Health;
