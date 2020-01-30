import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6
import { isSigned } from '../../utils/authentication';

const renderRoute = (render, userId, redirectTo) => (props) => (
  isSigned(userId) ?
    // <Component
    //   {...props}
    // />
    render()
    : <Redirect to={redirectTo} />
)

let ProtectedRoute = ({
  render,
  redirectTo,
  userId,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={renderRoute(render, userId, redirectTo)}
    />
  )
};

ProtectedRoute.propTypes = {
  userId: PropTypes.string.isRequired,
  redirectTo: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  // component: PropTypes.node.isRequired,
}

const mapStateToProps = state => {
  console.log(state);
  return ({
    userId: state.loggedUser.id,
  })
};

ProtectedRoute = connect(mapStateToProps, null)(ProtectedRoute)

export default ProtectedRoute;