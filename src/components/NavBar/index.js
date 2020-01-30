import React from 'react';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
import { HOME_PATH, TODO_LIST_PATH } from '../../constants/Pathes';
import { connect } from 'react-redux';
import { loginSuccessUser, logoutSuccessUser } from '../../actions/loggedUser';
import LoginPanel from './LoginPanel';

const myUserId = 'user1';

function NavBar({
  children,
  userId,
  onSignInClick,
  onSignOutClick,
}) {

  // const onSignInClick = (id) => () => {
  //   console.log('sign in success');
  //   localStorage.setItem(AUTH_TOKEN_KEY, id);
  // };
  // const onSignOutClick = () => {
  //   console.log('sign out success');
  //   localStorage.removeItem(AUTH_TOKEN_KEY);
  // }

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
        {/* {isSigned(userId) ? */}
        <Link
          to={TODO_LIST_PATH}
          className={styles.TodoLink}
        >
          Todo
        </Link>
        {/* : null */}
        {/* } */}
      </span >
      <LoginPanel
        userId={userId}
        onSignInClick={onSignInClick(myUserId)}// curry function! see below
        onSignOutClick={onSignOutClick}
      />
    </div>
  )
}

// const mapStateToNavBarProps = (state) => ({
//   userId: state.loggedUser.id,
// });

const mapDispatchToNavBarProps = (dispatch) => ({
  onSignInClick: (id) => () => {
    console.log('sign in success');
    dispatch(loginSuccessUser(id));
  },
  onSignOutClick: () => {
    console.log('sign out success');
    dispatch(logoutSuccessUser());
  },

});

export default connect(
  null,
  mapDispatchToNavBarProps,
)(NavBar);