import React from 'react'
import PropTypes from "prop-types";

import { Button } from '@material-ui/core'

import '../../../../sass/components/_button.scss'

const SignButton = ({
  text,
  onClick
}) => (
    <>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className="submit-button"
        onClick={onClick}
      >
        {text}
      </Button>
    </>
  );

SignButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SignButton;