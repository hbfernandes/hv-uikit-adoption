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
import HvLogin from "@hv/uikit-react-core/dist/Login";

const LoginForm = ({ login }) => (
  <HvLogin login={credentials => login(credentials)} />
);

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;
