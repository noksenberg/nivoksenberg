import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentWrapper from "./components/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import fitAtHome from "../../assets/fit-at-home.gif";

const useStyles = makeStyles(theme => ({
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  avatar: {
    margin: "10%",
    width: theme.spacing(15),
    height: theme.spacing(15),

    [theme.breakpoints.down("md")]: {
      width: theme.spacing(7),
      height: theme.spacing(7)
    }
  },
  row_: {
    marginTop: "5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  project: {
    width: "100%",
    height: "100%",
    objectFit: "contain",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "100%"
    }
  }
}));

const Portfolio = props => {
  const classes = useStyles();

  return (
    <ContentWrapper>
      <div className={classes.titleWrapper}>
        <div>
          <Typography variant="h2">
            <b>{props.lang === 0 ? "Personal" : "Portafolio"}</b>
          </Typography>
          <Typography variant="h2">
            {props.lang === 0 ? "PORTFOLIO" : "PERSONAL"}
          </Typography>
        </div>
        <div>
          <Avatar
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            className={classes.avatar}
          />
        </div>
      </div>
      <div>
        <div className={classes.row_}>
          <div>
            <img
              className={classes.project}
              src={fitAtHome}
              alt="Fit at Home"
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Portfolio;
