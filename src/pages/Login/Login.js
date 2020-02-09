/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import PropTypes from "prop-types";
import LoginForm from "components/login/LoginForm";
import withLayout from "lib/hocs/withLayout";

const Login = ({ classes, login }) => {
  return (
    <div className={classes.root}>
      <LoginForm login={login} />
    </div>
  );
};

Login.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  login: PropTypes.func.isRequired
};

export default withLayout(Login, true);
