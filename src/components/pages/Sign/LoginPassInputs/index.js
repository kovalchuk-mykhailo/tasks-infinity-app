import React from 'react'
import PropTypes from "prop-types";

import { Grid, TextField } from '@material-ui/core'

const LoginPassInputs = ({
  variant,
  autoFocus,
  handleEmailChange,
  handlePasswordChange
}) => (
    <>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          color="secondary"
          onChange={handleEmailChange}
          autoFocus={autoFocus}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          color="secondary"
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
      </Grid>
    </>
  );

LoginPassInputs.propTypes = {
  variant: PropTypes.string,
  autoFocus: PropTypes.bool,
  handleEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

LoginPassInputs.defaultProps = {
  variant: "standard",
  autoFocus: false,
};

export default LoginPassInputs;