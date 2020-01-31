import React from 'react'
import LinkButton from '../../LinkButton';
import { SIGN_UP_PATH, SIGN_IN_PATH } from '../../../constants/Pathes';

const LoginButtons = () => {
  return (
    <>
      <LinkButton
        to={SIGN_IN_PATH}
      >
        Sign In
      </LinkButton>
      <LinkButton
        to={SIGN_UP_PATH}
      >
        Sign Up
      </LinkButton>
    </>
  )
}

export default LoginButtons;