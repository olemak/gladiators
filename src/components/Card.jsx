import React, { Component } from "react";
import { Health } from "./Health";
import "./card.css";

export class Card extends Component {
    render() {
        return (
            <div className={`Card ${this.props.__typename}`}>
                <h3 className={`Card__title ${this.props.__typename}__title`}>
                    {this.props.name}
                </h3>

                <i
                    className={`Card__type Card__type--${this.props.type} ${
                        this.props.__typename
                    }__type`}
                />

                {this.props.image ? (
                    <img
                        className={`Card__image ${
                            this.props.__typename
                        }__image`}
                        src={this.props.image.url}
                        alt={this.props.name}
                    />
                ) : (
                    ""
                )}
                <p
                    className={`Card__description ${
                        this.props.__typename
                    }__description`}
                >
                    {this.props.description}
                </p>
                <div
                    className={`Card__attack ${this.props.__typename}__attack`}
                >
                    <div className="Attack__icon" />
                    <div className="Attack__value">{this.props.attack}</div>
                </div>
                <div
                    className={`Card__defense ${
                        this.props.__typename
                    }__defense`}
                >
                    <div className="Defense__icon" />
                    <div className="Defense__value">{this.props.defense}</div>
                </div>
                {this.props.health > 0 ? (
                    <Health
                        className={`Card__health ${
                            this.props.__typename
                        }__health`}
                        count={this.props.health}
                    />
                ) : (
                    ""
                )}
            </div>
        );
    }
}

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
