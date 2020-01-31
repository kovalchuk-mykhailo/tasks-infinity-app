import React from 'react'
import styles from './styles.module.css';
import LoginButtons from '../LoginButtons'
import UserMenu from '../UserMenu';
import { isUserSigned } from '../../../utils/authentication';

export default function LoginPanel({ userId, onSignOutClick }) {
  return (
    <span className={styles.btnContainer}>
      {isUserSigned(userId) ?
        <UserMenu userId={userId}
          onSignOutClick={onSignOutClick} /> :
        <LoginButtons />
      }
    </span>
  )
}

