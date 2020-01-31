import React from 'react'
import PropTypes from "prop-types";

import { Grid, TextField } from '@material-ui/core'

const NamesInputs = ({ variant }) => {
  return (
    <>
      <Grid item xs={12} sm={6}>
        <TextField
          autoComplete="fname"
          name="firstName"
          variant={variant}
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          variant={variant}
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoComplete="lname"
        />
      </Grid>
    </>
  )
}

NamesInputs.propTypes = {
  variant: PropTypes.string,
};

NamesInputs.defaultProps = {
  variant: "standard",
};

export default NamesInputs;
