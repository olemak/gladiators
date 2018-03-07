import React from "react";
import { Health } from "./Health";
import { Image } from "./Image";
import "./card.css";

export const Card = props => {
    const {
        __typename,
        name,
        image,
        type,
        description,
        health,
        ...stats
    } = props;

    return (
        <div className={`Card ${__typename}`}>
            <h3 className="Card__title">{name}</h3>
            <Image className="Card__image" src={image.url} />
            <i className={`Card__type Card__type--${type}`} />
            <p className="Card__description">{description}</p>
            {Object.keys(stats).map(key => (
                <div className={`Card__${key}`} key={key}>
                    <div className={`${key}__icon`} />
                    <div className={`${key}__value`}>{stats[key]}</div>
                </div>
            ))}
            <Health className="Card__health" count={health} />
        </div>
    );
};

Card.defaultProps = {
    __typename: "Gladiator",
    type: "None",
    name: "Title missing",
    description: "No description",
    image: { url: "noimage" },
    attack: 3,
    defense: 3,
    health: 3
};
export default Card;
