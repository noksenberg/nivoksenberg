import React from "react";

const LayoutWrapper = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <div>
      <Layout {...rest}>
        <Component {...rest} />
      </Layout>
    </div>
  );
};

export default LayoutWrapper;
