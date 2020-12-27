import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./pages/HomePage/HomePage";
import { useStyles } from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { routes } from "./routes";
import SimpleBackdrop from "./components/Backdrop/Backdrop";

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Suspense
        fallback={
          <div>
            <SimpleBackdrop />
          </div>
        }
      >
        <Header />
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className={classes.main} maxWidth="lg">
            <Switch>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
          </Container>
        </div>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
