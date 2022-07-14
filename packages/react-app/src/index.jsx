import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { Buffer } from "buffer";
import "./index.css";
import { GraphQLClient, ClientContext, useQuery } from "graphql-hooks";

const gqlclient = new GraphQLClient({
  url: "https://api.studio.thegraph.com/query/2231/juicebox-v2-dev-rinkeby/0.2.7",
});

window.Buffer = window.Buffer || Buffer;

const themes = {
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
};

const prevTheme = window.localStorage.getItem("theme");

const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ClientContext.Provider value={gqlclient}>
      <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
        <BrowserRouter>
          <App subgraphUri={subgraphUri} />
        </BrowserRouter>
      </ThemeSwitcherProvider>
    </ClientContext.Provider>
  </ApolloProvider>,
  document.getElementById("root"),
);
