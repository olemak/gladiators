import React, { Component } from "react";
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
            </div>
        );
    }
}

export const AppWithData = graphql(gladiatorQuery)(App);
