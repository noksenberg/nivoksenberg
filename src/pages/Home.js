import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex"
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>Hi</div>
    </div>
  );
};

export default Home;
