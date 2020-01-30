import React from "react";
import PropTypes from "prop-types";
import NavBar from "../../../NavBar";
import '../../../../sass/layouts/_default.scss'


export default function DefaultLayout({ children, userId }) {
  return (
    <>
      <NavBar userId={userId}>
        Tasks Infinity
      </NavBar>
      <div className="Default-Wrapper">
        {children}
      </div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
  userId: PropTypes.string.isRequired
};
