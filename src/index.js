import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { createClient, Provider } from "urql";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    display: flex;
    align-items: center;

    & > #root {
      display: block;
      width: 100%;
    }
    
  }

`;

const client = createClient({
  url: "https://late-water.us-west-2.aws.cloud.dgraph.io/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
