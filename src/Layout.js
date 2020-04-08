import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";

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
    margin: "2% 2% 0 2%",
    display: "flex",
    justifyItems: "center",
    justifyContent: "space-between"
  },
  tooltip: {
    margin: theme.spacing(1),
    padding: "0"
  }
}));

const Layout = props => {
  const classes = useStyles();

  const portfolioButton = () => (
    <IconButton
      className={classes.tooltip}
      aria-label="portfolio"
      href="/#portfolio"
    >
      <WorkIcon fontSize="large" />
    </IconButton>
  );

  const homeButton = () => (
    <IconButton className={classes.tooltip} aria-label="home" href="/">
      <HomeIcon fontSize="large" visibility="hidden" />
    </IconButton>
  );

  const menuButton = () => {
    if (props.location.pathname == "/") {
      return portfolioButton();
    }
    return homeButton();
  };

  return (
    <div className={classes.root}>
      <div className={classes.outerCard}>
        <div className={classes.cardWrapper}>
          <div className={classes.header}>
            <div>{menuButton()}</div>
            <div>
              <Tooltip
                className={classes.tooltip}
                title="English"
                aria-label="English"
                onClick={() => props.setLang(0)}
              >
                <Fab size="small">EN</Fab>
              </Tooltip>
              <Tooltip
                className={classes.tooltip}
                title="Español"
                aria-label="Español"
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
              <IconButton className={classes.tooltip} aria-label="delete">
                <CloseIcon fontSize="large" visibility="hidden" />
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
