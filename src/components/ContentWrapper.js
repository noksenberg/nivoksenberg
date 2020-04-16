import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  contentWrapper: {
    margin: "0 5% 0 5%",

    [theme.breakpoints.up("md")]: {
      margin: "0 10% 0 10%"
    }
  }
}));

const ContentWrapper = props => {
  const classes = useStyles();
  return <div className={classes.contentWrapper}>{props.children}</div>;
};

export default ContentWrapper;
