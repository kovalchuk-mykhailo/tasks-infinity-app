import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import DefaultLayout from "../pages/_layouts/default";
import AuthLayout from "../pages/_layouts/auth";
import { isSigned } from "../../utils/authentication";
import { SIGN_IN_PATH } from "../../constants/Pathes";

let RouteWrapper = ({
  component: Component,
  isPrivate,
  isAuthPage,
  userId,
  location,
  ...rest
}) => {
  console.log("location", location.pathname)
  console.log("RouteWrapper. userId:", userId);
  const signed = isSigned(userId);

  const from = location.pathname;
  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !signed) {
    console.log("Redirect to", SIGN_IN_PATH);
    return <Redirect to={{
      pathname: SIGN_IN_PATH,
      state: {
        from,
      }
    }} />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  // if (!isPrivate && signed) {
  //   console.log("Redirect", HOME_PATH);
  //   return <Redirect to={HOME_PATH} />;
  // }

  const Layout = isAuthPage ? AuthLayout : DefaultLayout;
  const myProps = isAuthPage ? {} : {
    userId: userId,
  }

  /**
   * If not included on both previous cases, redirect user to the desired route.
   */
  return (
    <Route
      {...rest}
      render={props => (
        <Layout {...myProps}>
          <Component {...props} {...myProps} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  userId: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isAuthPage: false,
};

const mapStateToProps = state => {
  console.log("RouteWrapper, mapped store:", state.loggedUser);
  return ({
    userId: state.loggedUser.id,
  })
};

RouteWrapper = connect(mapStateToProps)(RouteWrapper)

export default RouteWrapper;