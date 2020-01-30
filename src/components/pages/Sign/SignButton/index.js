import React from 'react'
import { Button } from '@material-ui/core'

import '../../../../sass/components/_button.scss'

const SignButton = ({ text, onClick }) => (
  <>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className="submit-button"
    // onClick=""
    >
      {text}
    </Button>
  </>
)
export default SignButton;