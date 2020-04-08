import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ContentWrapper from "./components/ContentWrapper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import avatar from "./../../assets/avatar.jpg";
import Portfolio from "./Portfolio";

const useStyles = makeStyles(theme => ({
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alightItems: "center",
    wordBreak: "break-word"
  },
  avatar: {
    margin: "10%",
    width: theme.spacing(15),
    height: theme.spacing(15),

    [theme.breakpoints.down("md")]: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    }
  },
  socialMedia: {
    margin: "5% 0 5% 0",
    display: "flex",
    justifyItems: "center",
    justifyContent: "space-between"
  }
}));

const Home = props => {
  const classes = useStyles();
  // 0: EN, 1: ES
  const firstParagraph = () => {
    if (props.lang === 0) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          I&apos;m Niv Oksenberg, welcome to my site. Since you are here, let me
          tell you a little bit about me. I&apos;m a{" "}
          <b>Software Engineer and Data Scientist</b>, trying to use my skills
          to solve complex <b>real world problems</b> with elegant, efficient,{" "}
          <b>human centered solutions</b>. A technology product is only useful
          when it can be used.
        </Typography>
      );
    } else if (props.lang === 1) {
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

  const secondParagraph = () => {
    if (props.lang === 0) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          I&apos;ve worked in numerous projects, from applications designed for
          concurrent use by millions of users to personal (and sometimes{" "}
          <i>fun</i>) initiatives. I&apos;m specially attracted to{" "}
          <b>big and impactful</b> projects that aspire to be used on a global
          scale. I believe that, if well used, technology can make people&apos;s
          life better and easier.
        </Typography>
      );
    } else if (props.lang === 1) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          He trabajado en diversos proyectos, desde aplicaciones diseñadas para
          su uso por millones de usuarios de manera concurrente hasta
          iniciativas personales de menor tamaño. Me atraen en particular los
          proyectos con <b>ambición global</b>. Creo firmemente que la
          tecnología, si se usa de manera correcta, puede hacer la vida de las
          personas mejor y más simple.
        </Typography>
      );
    }
  };

  const thirdParagraph = () => {
    if (props.lang === 0) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          Contact me on here <b>nivoksenberg@gmail.com</b>.
        </Typography>
      );
    } else if (props.lang === 1) {
      return (
        <Typography variant="body1" align="justify" paragraph>
          Escríbeme a <b>nivoksenberg@gmail.com</b>.
        </Typography>
      );
    }
  };

  return (
    <div>
      <ContentWrapper>
        <div className={classes.titleWrapper}>
          <div>
            <Typography variant="h2">
              <b>{props.lang === 0 ? "Hello" : "Hola"}</b>
            </Typography>
            <Typography variant="h2" gutterBottom>
              {props.lang === 0 ? "WORLD" : "MUNDO"}.
            </Typography>
          </div>
          <div>
            <Avatar src={avatar} className={classes.avatar} />
          </div>
        </div>
        <div>
          {firstParagraph()}
          {secondParagraph()}
          {thirdParagraph()}
        </div>
        <div className={classes.socialMedia}>
          <IconButton
            href="https://www.linkedin.com/in/nivoksenberg/"
            target="_blank"
            rel="noopener"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://github.com/noksenberg"
            target="_blank"
            rel="noopener"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/nivoksenberg/"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            href="https://www.facebook.com/niv.oksenberg"
            target="_blank"
            rel="noopener"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
        </div>
      </ContentWrapper>
      <Portfolio setLang={props.setLang} lang={props.lang} />
    </div>
  );
};

export default Home;
