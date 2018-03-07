import React from "react";

export const Health = props => {
    const hitPoints = [0, 1, 2, 3, 4, 5];
    const { count } = props;

    if (count) {
        return (
            <ul className={`${props.className} health__list`}>
                {hitPoints.map(index => (
                    <li
                        className={"health__point"}
                        key={`healthpoint-${index}`}
                    >
                        <div
                            className={`health__icon health__icon--${
                                index < count ? "full" : "empty"
                            }`}
                        />
                    </li>
                ))}
            </ul>
        );
    }
    return null;
};

Health.propTypes = {};

export default Health;
