import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import { AppWithData } from "./App";

import registerServiceWorker from "./registerServiceWorker";

const GRAPHCMS_API = "https://api.graphcms.com/simple/v1/gladiators";

const client = new ApolloClient({
    link: new HttpLink({ uri: GRAPHCMS_API }),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <AppWithData />
    </ApolloProvider>,
    document.getElementById("root")
);
registerServiceWorker();
