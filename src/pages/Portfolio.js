import React from "react";
import {
  makeStyles,
  createMuiTheme,
  responsiveFontSizes,
  ThemeProvider
} from "@material-ui/core/styles";
import ContentWrapper from "../components/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles(theme => ({
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    wordBreak: "break-word"
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
  root: {
    marginBottom: "5%",
    flexGrow: 1
  },
  containerRow: {
    marginTop: "3%"
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
  const classes = useStyles(theme);

  return (
    <div id="portfolio">
      <ThemeProvider theme={theme}>
        <ContentWrapper>
          <div className={classes.titleWrapper}>
            <div>
              <Typography variant="h2">
                <b>{props.lang === 0 ? "Personal" : "Portafolio"}</b>
              </Typography>
              <Typography variant="h2">
                {props.lang === 0 ? "PORTFOLIO." : "PERSONAL."}
              </Typography>
            </div>
            <div>
              <Avatar
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                className={classes.avatar}
              />
            </div>
          </div>
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12}>
              <Grid container spacing={10} className={classes.containerRow}>
                <Grid item xs={12} lg={6} md={6} sm={12} key={10}>
                  <img
                    className={classes.project}
                    src={'/fit-at-home.gif'}
                    alt="Fit at Home"
                  />
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={12} key={11}>
                  <div>
                    <Typography variant="h4">
                      <b>Fit at Home</b>
                    </Typography>
                    <Typography variant="h6" paragraph>
                      {props.lang === 0
                        ? "Personal Project - April 2020."
                        : "Proyecto Personal - Abril 2020."}
                    </Typography>
                    <Typography variant="body2" align="justify" paragraph>
                      {props.lang === 0
                        ? `Amid a tough health emergency, Fit at Home is a new social
                  media designed to share workout routines. With rich resources
                  like videos that allow side and embedded comments, this new app has content
                  for people in every level. Don't let the quarantine get
                  in between you and a healthy lifestyle!`
                        : `En medio de una emergencia sanitaria, Fit at Home es una nueva 
                    red social diseñada para compartir rutinas de ejercicio. Con recursos
                    valiosos como videos que permiten comentarios laterales y embebidos, esta
                    nueva app tiene contenido para personas de todos los niveles. No dejes que la 
                    cuarentena se interponga entre ti y una vida saludable!`}
                    </Typography>
                    <Typography variant="body1">
                      <b>Tech Stack</b>:
                    </Typography>
                    <Typography variant="body2">
                      <span>
                        Frontend: React {props.lang === 0 ? "and" : "y"}{" "}
                        MaterialUI.
                      </span>
                      <br />
                      Backend: Node + Express{" "}
                      {props.lang === 0 ? "with" : "con"} MongoDB.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={10} className={classes.containerRow}>
                <Grid item xs={12} lg={6} md={6} sm={12} key={12}>
                  <img className={classes.project} src={'imfr.gif'} alt="IMFR" />
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={12} key={13}>
                  <div>
                    <Typography variant="h4">
                      <b>Millenium Institute of Research</b>
                    </Typography>
                    <Typography variant="h6" paragraph>
                      {props.lang === 0
                        ? "Data Analyst - March 2020."
                        : "Analista de Datos - Marzo 2020."}
                    </Typography>
                    <Typography variant="body2" align="justify" paragraph>
                      {props.lang === 0
                        ? `Directly assignd by the chilean Ministry of Science and Technology, the
                    Millenium Institute of Research had the responsability of processing all the
                    information regarding the COVID-19 outbreak. I partnered with them to achieve
                    this titanic task, being in charge of modeling the information and scripting 
                    its later insertion to a relational database.`
                        : `Asignados directamente por el Ministerio de Ciencia y Tecnología, el Instituto
                    Milenio de Investigación tenía la responsabilidad de procesar toda la información
                    relacionada con la explosión del COVID-19. Me asocié con ellos para lograr esta
                    tarea, modelando la información y automatizando la inserción de datos en una base
                    de datos relacional con un script. `}
                    </Typography>
                    <Typography variant="body1">
                      <b>Tech Stack</b>:
                    </Typography>
                    <Typography variant="body2">
                      <span>
                        Python {props.lang === 0 ? "and" : "y"} SQLite.
                      </span>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={10} className={classes.containerRow}>
                <Grid item xs={12} lg={6} md={6} sm={12} key={14}>
                  <Link href="https://www.geteagle.com.au/" target="_blank">
                    <img
                      className={classes.project}
                      src={'eagle.png'}
                      alt="Eagle Software"
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} lg={6} md={6} sm={12} key={15}>
                  <div>
                    <Typography variant="h4">
                      <b>Eagle Software</b>
                    </Typography>
                    <Typography variant="h6" paragraph>
                      {props.lang === 0
                        ? "Real Estate CRM - 2019."
                        : "CRM de Bienes Raíces - 2019."}
                    </Typography>
                    <Typography variant="body2" align="justify" paragraph>
                      {props.lang === 0
                        ? `Eagle Software is a Melbourne based company, that offers CRM services
                    to Real Estate businesses in Australia and New Zealand. I worked with
                    them as a Full Stack Web Developer. My notable features include an Email
                    syncing tool with Nylas, automated reference checks for tenants, API
                    integrations, a text templatizer, query optimizing and more. 
                    Awesome product and awesome team!`
                        : `Eagle Software es una empresa situada en Melbourne, que ofrece servicios
                    de CRM a empresas de Bienes Raíces en Australia y Nueva Zelanda. Trabajé con
                    ellos como Full Stack Web Developer. Mis proyectos más grandes fueron una
                    herramienta de sincronización de Emails con Nylas, revisión automática de
                    referencias para arrendatarios, integraciones con APIs, un templatizer de 
                    texto, optimización de consultas y más. Increíble producto e increíble equipo! `}
                    </Typography>
                    <Typography variant="body1">
                      <b>Tech Stack</b>:
                    </Typography>
                    <Typography variant="body2">
                      <span>
                        Frontend: React {props.lang === 0 ? "and" : "y"} Rails,{" "}
                        {props.lang === 0
                          ? "with Paid UI Design Libraries."
                          : "con librerías de diseño UI pagadas."}
                      </span>
                      <br />
                      Backend: Rails {props.lang === 0 ? "with" : "con"}{" "}
                      PostgreSQL {props.lang === 0 ? "and " : "y "}
                      GraphQL.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ContentWrapper>
      </ThemeProvider>
    </div>
  );
};

export default Portfolio;
