import React from "react";
import "./ItemProperty.css";

const ItemTypeVariation = (value, property) => {
    if (value && value > 0) {
        return `${property.toLowerCase()}`;
    }
    switch (property) {
        case "Defense":
            return "sunder";
        case "Attack":
            return "break";
        case "Health":
            return "harm";
        default:
            return "unknown";
    }
};
export const ItemProperty = props => {
    const name = ItemTypeVariation(props.value, props.property);

    return (
        <div className={`Item__property Item__property--${name}`}>
            <div
                className={`Item__property-icon Item__property-icon--${name}`}
            />
            <div className={`Item__property-value`}>{props.value}</div>
        </div>
    );
};
