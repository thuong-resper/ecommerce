import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { styles } from "./styles";

class SignupPage extends Component {
  Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container component="main" className={classes.root}>
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          className={classes.pageCenter}
        >
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              <b>Sign up</b>
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container className={classes.userName} spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    required
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    variant="outlined"
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12} fullWidth>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    labelPlacement="end"
                    label={
                      <Box className={classes.signUpGroup}>
                        <Typography variant="body1">
                          {"I agree to all"}
                        </Typography>
                        <Link to="/signup" className={classes.link}>
                          <Typography
                            variant="body1"
                            className={classes.signUp}
                          >
                            Terms & Conditions
                          </Typography>
                        </Link>
                      </Box>
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid
                container
                fullWidth
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Box mt={3} className={classes.signUpGroup}>
                  <Typography variant="body1" gutterBottom>
                    {"Already have an account?"}
                  </Typography>
                  <Link to="/login" className={classes.link}>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className={classes.signUp}
                    >
                      Sign in
                    </Typography>
                  </Link>
                </Box>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

SignupPage.propTypes = {
  classes: PropTypes.shape({
    avatar: PropTypes.any,
    form: PropTypes.any,
    image: PropTypes.any,
    link: PropTypes.any,
    pageCenter: PropTypes.any,
    paper: PropTypes.any,
    root: PropTypes.any,
    signUp: PropTypes.any,
    signUpGroup: PropTypes.any,
    submit: PropTypes.any,
    userName: PropTypes.any,
  }),
};

export default withStyles(styles)(SignupPage);
