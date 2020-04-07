import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "./../../avatar.jpg";

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
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between"
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
  textWrapper: {
    margin: "0 5% 0 5%",

    [theme.breakpoints.up("md")]: {
      margin: "0 10% 0 10%"
    }
  },
  socialMedia: {
    margin: "5% 0 5% 0",
    display: "flex",
    justifyItems: "center",
    justifyContent: "space-between"
  }
}));

const Home = () => {
  const classes = useStyles();
  // 0: EN, 1: ES
  const [lang, setLang] = useState(0);

  const firstParagraph = lang => {
    if (lang === 0) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          I'm Niv Oksenberg, welcome to my site. Since you are here, let me tell
          you a little bit about me. I'm a{" "}
          <b>Software Engineer and Data Scientist</b>, trying to use my skills
          to solve complex <b>real world problems</b> with elegant, efficient,{" "}
          <b>human centered solutions</b>. A technology product is only useful
          when it can be used.
        </Typography>
      );
    } else if (lang === 1) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          Mi nombre es Niv Oksenberg, bienvenido a mi página web. Soy un
          <b> Ingeniero de Software y Data Scientist</b>, apasionado por
          resolver <b>problemas complejos del mundo real</b> de manera elegante,
          eficiente y con el ser <b>humano como eje central</b> de cualquier
          solución. Un producto tecnológico es útil solamente cuando se logra
          utilizar.
        </Typography>
      );
    }
  };

  const secondParagraph = lang => {
    if (lang === 0) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          I've worked in numerous projects, from applications designed for
          concurrent use by millions of users to personal (and sometimes{" "}
          <i>fun</i>) initiatives. I'm specially attracted to{" "}
          <b>big and impactful</b> projects that aspire to be used on a global
          scale. I believe that if well used technology can make people's life
          better and easier. You can check some of my work <u>here</u>.
        </Typography>
      );
    } else if (lang === 1) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          He trabajado en diversos proyectos, desde aplicaciones diseñadas para
          su uso por millones de usuarios de manera concurrente hasta
          iniciativas personales de menor tamaño. Me atraen en particular los
          proyectos con <b>ambición global</b>. Creo firmemente que la
          tecnología, si se usa de manera correcta, puede hacer la vida de las
          personas mejor y más simple. <u>Aquí</u> puedes ver una muestra de mi
          trabajo.
        </Typography>
      );
    }
  };

  const thirdParagraph = lang => {
    if (lang === 0) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          Contact me on here <b>nivoksenberg@gmail.com</b>.
        </Typography>
      );
    } else if (lang === 1) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          Escríbeme a <b>nivoksenberg@gmail.com</b>.
        </Typography>
      );
    }
  };

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
                onClick={() => setLang(0)}
              >
                <Fab size="small">EN</Fab>
              </Tooltip>
              <Tooltip
                className={classes.tooltip}
                title="ES"
                aria-label="ES"
                onClick={() => setLang(1)}
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

          <div className={classes.textWrapper}>
            <div className={classes.titleWrapper}>
              <div>
                <Typography variant="h2">
                  <b>{lang === 0 ? "Hello" : "Hola"}</b>
                </Typography>
                <Typography variant="h2" gutterBottom>
                  <b>{lang === 0 ? "WORLD" : "MUNDO"}</b>.
                </Typography>
              </div>
              <div>
                <Avatar src={avatar} className={classes.avatar} />
              </div>
            </div>
            <div>
              {firstParagraph(lang)}
              {secondParagraph(lang)}
              {thirdParagraph(lang)}
            </div>
            <div className={classes.socialMedia}>
              <IconButton>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <GitHubIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <FacebookIcon fontSize="large" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
