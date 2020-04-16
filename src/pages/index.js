import React, { useState } from "react";
import ErrorBoundary from "../components/ErrorBoundary";
import { Router } from "@reach/router";
import LayoutWrapper from "../components/LayoutWrapper";
import Layout from "../components/Layout";
import Home from "../components/Home";
import SEO from "../components/SEO";

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
      </Router>
    </React.StrictMode>
  );
};

const AppWithErrorBoundaries = props => {
  return (
    <ErrorBoundary>
      <>
        <SEO />
        <App {...props} />
      </>
    </ErrorBoundary>
  );
};

export default AppWithErrorBoundaries;
