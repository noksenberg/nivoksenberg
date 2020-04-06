import React, { useState } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import { Router } from "@reach/router";
import Home from "./pages/Home";

const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path="/" />
      </Router>
    </React.StrictMode>
  );
};

const AppWithErrorBoundaries = props => {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
};

ReactDOM.render(<AppWithErrorBoundaries />, document.getElementById("root"));
