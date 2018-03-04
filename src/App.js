import React, { Component } from "react";
import Gladiator from "./components/Gladiator";
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
    }
`;

export class App extends Component {
    render() {
        return (
            <div className="Gladiators">
                <h1>Gladiators</h1>
                {!this.props.data.loading ? (
                    this.props.data.allGladiators.map((gladiator, i) => (
                        <Gladiator
                            gladiator={gladiator}
                            key={`gladiator-${i}`}
                        />
                    ))
                ) : (
                    <h4>Loading</h4>
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
