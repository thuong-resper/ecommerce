import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    width: "80%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts({ severity, message }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={severity}>{message}</Alert>
    </div>
  );
}

SimpleAlerts.defaultProps = {
  severity: "info",
};
