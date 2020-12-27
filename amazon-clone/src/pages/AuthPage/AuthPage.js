// import { Typography } from "@material-ui/core";
// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import Button from "../../components/UI/Button/Button";
// import Input from "../../components/UI/Input/Input";
// import Spinner from "../../components/UI/Spinner/Spinner";
// import { checkValidity, updateObject } from "../../shared/utility";
// import * as actions from "../../store/actions/index";
// import classes from "./Auth.css";

// const AuthPage = (props) => {
//   const [authForm, setAuthForm] = useState({
//     email: {
//       elementType: "input",
//       elementConfig: {
//         type: "email",
//         placeholder: "Mail Address",
//       },
//       value: "",
//       validation: {
//         required: true,
//         isEmail: true,
//       },
//       valid: false,
//       touched: false,
//     },
//     password: {
//       elementType: "input",
//       elementConfig: {
//         type: "password",
//         placeholder: "Password",
//       },
//       value: "",
//       validation: {
//         required: true,
//         minLength: 6,
//       },
//       valid: false,
//       touched: false,
//     },
//   });
//   const [isSignup, setIsSignup] = useState(true);

//   const { buildingBurger, authRedirectPath, onSetRedirectPath } = props;

//   useEffect(() => {
//     if (!buildingBurger && authRedirectPath !== "/") {
//       onSetRedirectPath();
//     }
//   }, [buildingBurger, authRedirectPath, onSetRedirectPath]);

//   const inputChangedHandler = (event, controlName) => {
//     const updatedControls = updateObject(authForm, {
//       [controlName]: updateObject(authForm[controlName], {
//         value: event.target.value,
//         valid: checkValidity(
//           event.target.value,
//           authForm[controlName].validation
//         ),
//         touched: true,
//       }),
//     });
//     setAuthForm(updatedControls);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onAuth(authForm.email.value, authForm.password.value, isSignup);
//   };

//   const switchAuthModeHandler = (prevState) => {
//     setIsSignup(!isSignup);
//   };

//   const formElementsArray = [];
//   for (let key in authForm) {
//     formElementsArray.push({
//       id: key,
//       config: authForm[key],
//     });
//   }

//   let form = formElementsArray.map((formElement) => (
//     <Input
//       key={formElement.id}
//       elementType={formElement.config.elementType}
//       elementConfig={formElement.config.elementConfig}
//       value={formElement.config.value}
//       invalid={!formElement.config.valid}
//       shouldValidate={formElement.config.validation}
//       touched={formElement.config.touched}
//       changed={(event) => inputChangedHandler(event, formElement.id)}
//     />
//   ));

//   if (props.loading) {
//     form = <Spinner />;
//   }

//   let errorMessage = null;
//   if (props.error) {
//     errorMessage = (
//       <Typography variant="body1" color="secondary" gutterBottom>
//         {props.error.message}
//       </Typography>
//     );
//   }

//   let authRedirect = null;
//   if (props.isAuthenticated) {
//     authRedirect = <Redirect to={props.authRedirectPath} />;
//   }

//   return (
//     <div className={classes.Auth}>
//       {authRedirect}
//       {errorMessage}
//       <form onSubmit={submitHandler}>
//         {form}
//         <Button btnType="Success">Submit</Button>
//       </form>
//       <Button btnType="Danger" clicked={switchAuthModeHandler}>
//         Switch To {isSignup ? "SIGNIN" : "SIGNUP"}
//       </Button>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     loading: state.auth.loading,
//     error: state.auth.error,
//     isAuthenticated: state.auth.token !== null,
//     buildingBurger: state.burgerBuilder.building,
//     authRedirectPath: state.auth.authRedirectPath,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onAuth: (email, password, isSignup) => {
//       dispatch(actions.auth(email, password, isSignup));
//     },
//     onSetRedirectPath: () => {
//       dispatch(actions.setAuthRedirectPath("/"));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
import React from "react";

const AuthPage = () => {
  return <div>auth page</div>;
};

export default AuthPage;
