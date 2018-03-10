import React, { Component } from "react";
import { Card } from "./components/Card";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const gladiatorQuery = gql`
    {
        allGladiators {
            name
            description
            type
            image {
                url
            }
            attack
            health
            defense
        }
        allItems {
            name
            description
            type
            image {
                url
            }
            value
            property
        }
    }
`;

export class App extends Component {
    render() {
        return (
            <div className="Cards">
                {!this.props.data.loading ? (
                    this.props.data.allItems.map((item, i) => (
                        <Card {...item} key={`item-${i}`} />
                    ))
                ) : (
                    <h4>Loading Items</h4>
                )}
                {!this.props.data.loading ? (
                    this.props.data.allGladiators.map((gladiator, i) => (
                        <Card {...gladiator} key={`gladiator-${i}`} />
                    ))
                ) : (
                    <h4>Loading Gladiators</h4>
                )}
            </div>
        );
    }
}

App.defaultProps = {
    data: {
        allGladiators: [
            {
                __typename: "Gladiator",
                attack: 5,
                defense: 4,
                description:
                    "Oh boy, this gladiator is like the best, ever. He is awesome!!!",
                health: 3,
                image: { url: "" },
                name: "Kabuki Mage",
                type: "Poison"
            }
        ]
    }
};

export const AppWithData = graphql(gladiatorQuery)(App);
