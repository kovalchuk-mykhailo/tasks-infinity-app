import React from 'react'
import PropTypes from "prop-types";

import { Grid, TextField } from '@material-ui/core'

const LoginPassInputs = ({
  variant,
  autoFocus
}) => {
  return (
    <>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus={autoFocus}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant={variant}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Grid>
    </>
  )
}

LoginPassInputs.propTypes = {
  variant: PropTypes.string,
  autoFocus: PropTypes.bool,
};

LoginPassInputs.defaultProps = {
  variant: "standard",
  autoFocus: false,
};

export default LoginPassInputs;