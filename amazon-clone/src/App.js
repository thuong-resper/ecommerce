import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SimpleBackdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { routes } from "./routes";
import { useStyles } from "./styles";
import "./global.css";

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
          <Container component="main" className="main-view">
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
