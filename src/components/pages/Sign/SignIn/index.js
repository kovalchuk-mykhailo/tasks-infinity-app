import React from 'react';

import SignButton from '../SignButton';
import SignFooter from '../SignFooter';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import '../../../../sass/components/_icon.scss'
import '../../../../sass/components/_form.scss'
import { SIGN_UP_PATH } from '../../../../constants/Pathes';
import { connect } from 'react-redux';
import { loginAsyncRequestUser } from '../../../../actions/loggedUser';
import Inputs from '../Inputs';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Tasks Infinity
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

let SignIn = ({
  onSignInClick,
  location,
  userId
}) => {

  console.log('signin location:', location);
  console.log('signin userId:', userId);

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className="sign-main">
        <Avatar className="sign-avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className="sign-input-form" noValidate>
          <Inputs />
          <SignButton text="Sign In"
            onClick={onSignInClick} />
          <SignFooter
            rightText="Don't have an account? Sign Up"
            rightLinkPath={SIGN_UP_PATH}
          />
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

SignIn = connect(
  null,
  dispatch => ({
    onSignInClick: (e) => {
      e.preventDefault();
      dispatch(loginAsyncRequestUser())
    }
  })
)(SignIn);

export default SignIn;