import React from 'react'
import PropTypes from "prop-types";

import { Grid, Link } from '@material-ui/core'

import { HOME_PATH } from '../../../../constants/Pathes'

const SignFooter = ({
  rightText,
  rightLinkPath
}) => (
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
  );

SignFooter.propTypes = {
  rightText: PropTypes.string.isRequired,
  rightLinkPath: PropTypes.string.isRequired,
};

export default SignFooter;