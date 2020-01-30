import React from 'react'
import LinkButton from '../../LinkButton';
import { SIGN_UP_PATH, TODO_LIST_PATH } from '../../../constants/Pathes';

const LoginButtons = ({ onSignInClick }) => {
  return (
    <>
      <LinkButton
        to={TODO_LIST_PATH}
        onClick={onSignInClick}
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