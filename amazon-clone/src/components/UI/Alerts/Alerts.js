import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  link: {
    textDecoration: "none",
    fontWeight: 500,
    color: "#111",
  },
}));

export default function SimpleAlerts({
  severity,
  message,
  title,
  to,
  titleLink,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {message} —{" "}
        <Link to={to} className={classes.link}>
          {titleLink}
        </Link>
      </Alert>
    </div>
  );
}

SimpleAlerts.defaultProps = {
  severity: "info",
};
