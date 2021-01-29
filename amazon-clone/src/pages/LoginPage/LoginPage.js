import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Button,
  Grid,
  IconButton,
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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBackdrop from "../../components/Backdrop/Backdrop";
import SimpleAlerts from "../../components/UI/Alerts/Alerts";
import { login } from "../../store/actions/userActions";
import { styles } from "./styles";
import "./styles.css";

const LoginPage = (props) => {
  const { location, classes, history } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo !== null) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Grid container className="root">
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
            <b>Sign in</b>
          </Typography>
          {error && (
            <SimpleAlerts
              severity="error"
              title="Error"
              message={error}
            ></SimpleAlerts>
          )}
          {loading && <SimpleBackdrop />}
          <form className={classes.form} noValidate onSubmit={submitHandler}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={<Typography variant="body2">Remember Me</Typography>}
                />
              </Grid>
              <Grid item>
                <Link to="/signup" className={classes.link}>
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              <Typography
                component="h1"
                variant="body1"
                className={classes.textLow}
              >
                <b>Sign in</b>
              </Typography>
            </Button>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Box mt={3}>
                <Typography
                  variant="button"
                  gutterBottom
                  className={classes.textLow}
                >
                  Sign in with
                </Typography>
              </Box>
              <Box mt={3} className={classes.iconGroup}>
                <Link href="#" variant="body2" to="/signup">
                  <IconButton
                    aria-label="google"
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={classes.iconFacebook}
                      size="xs"
                    ></FontAwesomeIcon>
                  </IconButton>
                </Link>
                <Link href="#" variant="body2" to="/signup">
                  <IconButton
                    aria-label="google"
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      className={classes.iconGoogle}
                      size="xs"
                    ></FontAwesomeIcon>
                  </IconButton>
                </Link>
                <Link href="#" variant="body2" to="/signup">
                  <IconButton
                    aria-label="google"
                    className={classes.iconButton}
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={classes.iconTwitter}
                      size="xs"
                    ></FontAwesomeIcon>
                  </IconButton>
                </Link>
              </Box>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Box mt={3} className={classes.signUpGroup}>
                <Typography variant="body1" gutterBottom>
                  {"Not a member?"}
                </Typography>
                <Link
                  to={redirect ? `/register?redirect=${redirect}` : "/register"}
                  className={classes.link}
                >
                  <Typography
                    variant="body1"
                    gutterBottom
                    className={classes.signUp}
                  >
                    Sign up
                  </Typography>
                </Link>
              </Box>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

LoginPage.propTypes = {
  classes: PropTypes.shape({
    avatar: PropTypes.any,
    form: PropTypes.any,
    iconButton: PropTypes.any,
    iconFacebook: PropTypes.any,
    iconGoogle: PropTypes.any,
    iconGroup: PropTypes.any,
    iconTwitter: PropTypes.any,
    image: PropTypes.any,
    link: PropTypes.any,
    pageCenter: PropTypes.any,
    paper: PropTypes.any,
    root: PropTypes.any,
    signUp: PropTypes.any,
    signUpGroup: PropTypes.any,
    submit: PropTypes.any,
    textLow: PropTypes.any,
  }),
};

export default withStyles(styles)(LoginPage);
