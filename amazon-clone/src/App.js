import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SimpleBackdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./global.css";
import { useStyles } from "./styles";

const HomePage = React.lazy(() => {
  return import("./pages/HomePage/HomePage");
});

const ProductPage = React.lazy(() => {
  return import("./pages/ProductPage/ProductPage");
});

const CartPage = React.lazy(() => {
  return import("./pages/CartPage/CartPage");
});

const LoginPage = React.lazy(() => {
  return import("./pages/LoginPage/LoginPage");
});

const SignupPage = React.lazy(() => {
  return import("./pages/SignupPage/SignupPage");
});

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Suspense fallback={<SimpleBackdrop />}>
        <Header />
        <div className={classes.root}>
          <CssBaseline />
          <Container component="main" className="main-view">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/cart/:id?" component={CartPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/register" component={SignupPage} />
            </Switch>
          </Container>
        </div>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
