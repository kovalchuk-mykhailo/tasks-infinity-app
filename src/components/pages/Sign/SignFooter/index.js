import React from 'react'

import { Grid, Link } from '@material-ui/core'

import { HOME_PATH } from '../../../../constants/Pathes';

export default function SignFooter({ rightText, rightLinkPath }) {
  return (
    <Grid container>
      <Grid item xs>
        <Link href={HOME_PATH} variant="body2">
          Home
        </Link>
      </Grid>
      <Grid item>
        <Link href={rightLinkPath} variant="body2">
          {rightText}
        </Link>
      </Grid>
    </Grid>
  )
}
