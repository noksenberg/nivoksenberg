import React, { useState } from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./ErrorBoundary";
import { Router } from "@reach/router";
import LayoutWrapper from "./LayoutWrapper";
import Layout from "./Layout";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [lang, setLang] = useState(0);

  return (
    <React.StrictMode>
      <Router>
        <LayoutWrapper
          path="/"
          component={Home}
          layout={Layout}
          setLang={setLang}
          lang={lang}
        />
        <LayoutWrapper
          path="/portfolio"
          component={Portfolio}
          layout={Layout}
          setLang={setLang}
          lang={lang}
        />
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
