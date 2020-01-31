import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { HOME_PATH, TODO_LIST_PATH } from '../../constants/Pathes';
import { connect } from 'react-redux';
import { logoutSuccessUser } from '../../actions/loggedUser';
import LoginPanel from './LoginPanel';

function NavBar({
  children,
  userId,
  onSignOutClick,
}) {

  console.log("userId NavBar : ", userId);
  return (
    <div className={styles.NavBarContainer}>
      <span className={styles.NavLinks}>
        <Link
          to={HOME_PATH}
          className={styles.WelcomeLink}
        >
          {children}
        </Link>
        <Link
          to={TODO_LIST_PATH}
          className={styles.TodoLink}
        >
          Todo
        </Link>
      </span >
      <LoginPanel
        userId={userId}
        onSignOutClick={onSignOutClick}
      />
    </div>
  )
}

const mapDispatchToNavBarProps = (dispatch) => ({
  onSignOutClick: () => {
    dispatch(logoutSuccessUser());
  }
});

export default connect(
  null,
  mapDispatchToNavBarProps,
)(NavBar);