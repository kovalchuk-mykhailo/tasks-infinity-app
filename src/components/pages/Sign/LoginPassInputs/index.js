import React from 'react'
import { Grid, TextField } from '@material-ui/core'

export default function LoginPassInputs({ variant = "standard" }) {
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
          autoFocus
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
