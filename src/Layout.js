import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  outerCard: {
    background:
      "linear-gradient(135deg, black 25%, transparent 25%) -50px 0, linear-gradient(225deg, black 25%, transparent 25%) -50px 0, linear-gradient(315deg, black 25%, transparent 25%), linear-gradient(45deg, black 25%, transparent 25%);",
    backgroundSize: "2em 2em",
    backgroundColor: "#232323"
  },
  cardWrapper: {
    margin: "0% 5% 0% 5%",
    background: "white",
    zIndex: theme.zIndex.outerCard + 1,
    [theme.breakpoints.up("md")]: {
      border: "15px solid black"
    }
  },
  header: {
    marginTop: "3%",
    display: "flex",
    justifyItems: "center",
    justifyContent: "space-between"
  },
  tooltip: {
    margin: theme.spacing(1)
  }
}));

const Layout = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.outerCard}>
        <div className={classes.cardWrapper}>
          <div className={classes.header}>
            <div />
            <div>
              <Tooltip
                className={classes.tooltip}
                title="EN"
                aria-label="EN"
                onClick={() => props.setLang(0)}
              >
                <Fab size="small">EN</Fab>
              </Tooltip>
              <Tooltip
                className={classes.tooltip}
                title="ES"
                aria-label="ES"
                onClick={() => props.setLang(1)}
              >
                <Fab size="small">ES</Fab>
              </Tooltip>
            </div>
            <Tooltip
              className={classes.tooltip}
              title="Delete"
              disableFocusListener
              disableHoverListener
            >
              <IconButton aria-label="delete">
                <CloseIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
