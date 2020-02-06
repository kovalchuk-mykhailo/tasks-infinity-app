import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import DefaultLayout from "../pages/_layouts/default";
import AuthLayout from "../pages/_layouts/auth";
import { isUserSigned, getUserIdFromStorage } from "../../utils/authentication";
import { SIGN_IN_PATH, TODO_LIST_PATH } from "../../constants/Pathes";
import { loginSuccessUser } from "../../actions/loggedUser";

let RouteWrapper = ({
  component: Component,
  isPrivate,
  isNavBar,
  userId,
  OnUserIsLogged,
  location,
  ...rest
}) => {

  useEffect(() => { //use Effect = componentDidMount()
    const id = getUserIdFromStorage();
    console.log("!!!USE EFFECT", id);
    if (isUserSigned(id)) {
      OnUserIsLogged(id);
    }
  }, [OnUserIsLogged]);

  console.log("location", location.pathname)
  console.log("RouteWrapper.userId:", userId);
  const isSigned = isUserSigned(userId);

  /**
   * Redirect user to SignIn page if he tries to access a private route
   * without authentication.
   */
  if (isPrivate && !isSigned) {
    console.log("Redirect to", SIGN_IN_PATH);
    return <Redirect to={{
      pathname: SIGN_IN_PATH,
      state: {
        from: location.pathname,
      }
    }} />;
  }

  /**
   * Redirect user to Main page if he tries to access a non private route
   * (SignIn or SignUp) after being authenticated.
   */
  if (!isNavBar && isSigned) {
    console.log("Redirect", TODO_LIST_PATH);
    return <Redirect to={TODO_LIST_PATH} />;
  }

  const Layout = isNavBar ? DefaultLayout : AuthLayout;
  const myProps = !isNavBar ? {} : {
    userId,
  };

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
  OnUserIsLogged: PropTypes.func.isRequired,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isPrivate: PropTypes.bool,
  isNavBar: PropTypes.bool,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  isNavBar: false,
};

const mapStateToProps = state => {
  return ({
    userId: state.loggedUser.id,
  })
};

const mapDispatchToProps = dispatch => ({
  OnUserIsLogged: (id) => dispatch(loginSuccessUser(id)),
});

RouteWrapper = connect(mapStateToProps, mapDispatchToProps)(RouteWrapper)

export default RouteWrapper;