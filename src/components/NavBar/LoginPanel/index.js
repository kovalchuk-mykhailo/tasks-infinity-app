import React from 'react'
import styles from './styles.module.css';
import LoginButtons from '../LoginButtons'
import UserMenu from '../UserMenu';
import { isSigned } from '../../../utils/authentication';

export default function LoginPanel({ userId, onSignInClick, onSignOutClick }) {
  return (
    <span className={styles.btnContainer}>
      {isSigned(userId) ?
        <UserMenu userId={userId}
          onSignOutClick={onSignOutClick} /> :
        <LoginButtons
          onSignInClick={onSignInClick} />
      }
    </span>
  )
}

