// import { Container, Spinner } from "react-bootstrap";
// import { useSelector } from "react-redux";
// import { Redirect, Route, Switch, withRouter } from "react-router-dom";
// //split code
// import Footer from "./components/Footer";
// import Header from "./components/Header";

// const HomeScreen = React.lazy(() => {
//   return import("./screens/HomeScreen");
// });

// const CartScreen = React.lazy(() => {
//   return import("./screens/CartScreen");
// });

// const LoginScreen = React.lazy(() => {
//   return import("./screens/LoginScreen");
// });

// const OrderListScreen = React.lazy(() => {
//   return import("./screens/OrderListScreen");
// });

// const OrderScreen = React.lazy(() => {
//   return import("./screens/OrderScreen");
// });

// const PaymentScreen = React.lazy(() => {
//   return import("./screens/PaymentScreen");
// });

// const ProductEditScreen = React.lazy(() => {
//   return import("./screens/ProductEditScreen");
// });

// const ProductScreen = React.lazy(() => {
//   return import("./screens/ProductScreen");
// });

// const ProductListScreen = React.lazy(() => {
//   return import("./screens/ProductListScreen");
// });

// const PlaceOrderScreen = React.lazy(() => {
//   return import("./screens/PlaceOrderScreen");
// });

// const ProfileScreen = React.lazy(() => {
//   return import("./screens/ProfileScreen");
// });

// const RegisterScreen = React.lazy(() => {
//   return import("./screens/RegisterScreen");
// });

// const ShippingScreen = React.lazy(() => {
//   return import("./screens/ShippingScreen");
// });

// const UserEditScreen = React.lazy(() => {
//   return import("./screens/UserEditScreen");
// });

// const UserListScreen = React.lazy(() => {
//   return import("./screens/UserListScreen");
// });

// const App = () => {
//   const userLogin = useSelector((state) => state.userLogin);
//   const isAuthenticated = userLogin.token !== null;
//   const isAdmin = userLogin.isAdmin;

//   //all routes that don't need isAuthenticated
//   let routes = (
//     <div>
//       <Route path="/" exact component={HomeScreen} />
//       <Route path="/login" render={(props) => <LoginScreen {...props} />} />
//       <Route
//         path="/register"
//         render={(props) => <RegisterScreen {...props} />}
//       />
//       <Route path="/cart/:id?" render={(props) => <CartScreen {...props} />} />
//       <Route
//         path="/product/:id"
//         render={(props) => <ProductScreen {...props} />}
//       />
//       <Route
//         path="/admin/productlist/:pageNumber"
//         render={(props) => <ProductListScreen {...props} />}
//       />
//       <Route path="/order/:id" render={(props) => <OrderScreen {...props} />} />
//       <Route
//         path="/search/:keyword"
//         render={(props) => <HomeScreen {...props} />}
//         exact
//       />
//       <Route
//         path="/page/:pageNumber"
//         render={(props) => <HomeScreen {...props} />}
//         exact
//       />

//       <Route
//         path="/search/:keyword/page/:pageNumber"
//         render={(props) => <HomeScreen {...props} />}
//         exact
//       />
//       <Redirect to="/" />
//     </div>
//   );

//   //all routes that need isAuthenticated

//   if (isAuthenticated) {
//     routes = (
//       <Switch>
//         <Route
//           path="/shipping"
//           render={(props) => <ShippingScreen {...props} />}
//         />
//         <Route
//           path="/payment"
//           render={(props) => <PaymentScreen {...props} />}
//         />
//         <Route
//           path="/placeorder"
//           render={(props) => <PlaceOrderScreen {...props} />}
//         />
//         <Route
//           path="/profile"
//           render={(props) => <ProfileScreen {...props} />}
//         />
//       </Switch>
//     );
//   }

//   if (isAdmin) {
//     routes = (
//       <Switch>
//         <Route path="/order/:id" component={OrderScreen} />
//         <Route path="/shipping" component={ShippingScreen} />
//         <Route path="/payment" component={PaymentScreen} />
//         <Route path="/placeorder" component={PlaceOrderScreen} />
//         <Route path="/profile" component={ProfileScreen} />

//         <Route path="/admin/userlist" component={UserListScreen} />
//         <Route path="/admin/user/:id/edit" component={UserEditScreen} />
//         <Route path="/admin/productlist" component={ProductListScreen} exact />

//         <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
//         <Route path="/admin/orderlist" component={OrderListScreen} />
//       </Switch>
//     );
//   }
//   return (
//     <div>
//       <Header />
//       <Suspense fallback={<Spinner />}>
//         <main className="py-3">
//           <Container>
//             {routes}
//             <HomeScreen />
//           </Container>
//         </main>
//       </Suspense>
//       <Footer />
//     </div>
//   );
// };

// export default withRouter(App);

import React, { Suspense } from "react";
import { Container, Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./global.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ProductScreen = React.lazy(() => {
  return import("./screens/ProductScreen");
});

const CartScreen = React.lazy(() => {
  return import("./screens/CartScreen");
});

const HomeScreen = React.lazy(() => {
  return import("./screens/HomeScreen");
});

const LoginScreen = React.lazy(() => {
  return import("./screens/LoginScreen");
});

const OrderListScreen = React.lazy(() => {
  return import("./screens/OrderListScreen");
});

const OrderScreen = React.lazy(() => {
  return import("./screens/OrderScreen");
});

const PaymentScreen = React.lazy(() => {
  return import("./screens/PaymentScreen");
});

const PlaceOrderScreen = React.lazy(() => {
  return import("./screens/PlaceOrderScreen");
});

const ProductEditScreen = React.lazy(() => {
  return import("./screens/ProductEditScreen");
});

const ProductListScreen = React.lazy(() => {
  return import("./screens/ProductListScreen");
});

const ProfileScreen = React.lazy(() => {
  return import("./screens/ProfileScreen");
});

const RegisterScreen = React.lazy(() => {
  return import("./screens/RegisterScreen");
});

const ShippingScreen = React.lazy(() => {
  return import("./screens/ShippingScreen");
});

const UserEditScreen = React.lazy(() => {
  return import("./screens/UserEditScreen");
});

const UserListScreen = React.lazy(() => {
  return import("./screens/UserListScreen");
});

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/admin/userlist" component={UserListScreen} />
            <Route path="/admin/user/:id/edit" component={UserEditScreen} />
            <Route
              path="/admin/productlist"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/productlist/:pageNumber"
              component={ProductListScreen}
              exact
            />
            <Route
              path="/admin/product/:id/edit"
              component={ProductEditScreen}
            />
            <Route path="/admin/orderlist" component={OrderListScreen} />
            <Route path="/search/:keyword" component={HomeScreen} exact />
            <Route path="/page/:pageNumber" component={HomeScreen} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={HomeScreen}
              exact
            />
            <Route path="/" component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
