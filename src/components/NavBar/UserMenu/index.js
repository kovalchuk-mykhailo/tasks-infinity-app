import React from 'react'
import styles from './styles.module.css'
import LinkButton from '../../LinkButton'
import { HOME_PATH } from '../../../constants/Pathes'

export default function UserMenu({ userId, onSignOutClick }) {
  return (
    <span className={styles.UserMenu}>
      <h3>
        {userId}
      </h3>
      <LinkButton to={HOME_PATH}
        onClick={onSignOutClick}
      >
        Log out!
      </LinkButton>
    </span>
  )
}
