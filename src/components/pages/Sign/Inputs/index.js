import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { Grid } from '@material-ui/core';
import LoginPassInputs from '../LoginPassInputs';
import { connect } from 'react-redux';
import { setEmail, setPassword, setFirstname, setLastname, clearInputs } from '../../../../actions/inputs';
import NamesInputs from '../NamesInputs';

let Inputs = ({
  signup,
  handleEmailChange,
  handlePasswordChange,
  handleFirstnameChange,
  handleLastnameChange,
  onClearInputs,
  variant
}) => {

  useEffect(() => () => {
    onClearInputs();
    // console.log("signIn unmount");
  }, [onClearInputs]);

  const autoFocus = !signup;

  return (
    <Grid container spacing={3}>
      {signup ?
        <NamesInputs
          variant={variant}
          handleFirstnameChange={handleFirstnameChange}
          handleLastnameChange={handleLastnameChange}
        />
        : null
      }
      <LoginPassInputs
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        variant={variant}
        autoFocus={autoFocus}
      />
    </Grid>
  )
}

Inputs.propTypes = {
  variant: PropTypes.string,
  autoFocus: PropTypes.bool,

};

Inputs.defaultProps = {
  variant: "standard",
  signup: false,
};

Inputs = connect(
  null,
  dispatch => ({
    handleFirstnameChange: (e) => {
      dispatch(setFirstname(e.target.value));
    },
    handleLastnameChange: (e) => {
      dispatch(setLastname(e.target.value));
    },
    handleEmailChange: (e) => {
      dispatch(setEmail(e.target.value));
    },
    handlePasswordChange: (e) => {
      dispatch(setPassword(e.target.value));
    },
    onClearInputs: () => {
      dispatch(clearInputs());
    }
  })
)(Inputs);

export default Inputs;
