/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router";

const AuthRoute = ({ checkAuth, auth, path, exact, redirect, component }) => {
  const { isAuthed } = auth;

  const isLogin = path === "/login";
  const route = <Route path={path} exact={exact} component={component} />;

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (redirect) return <Redirect to={redirect} />;

  if (!isAuthed) {
    if (isAuthed === null) return null;
    return isLogin ? route : <Redirect to="/login" />;
  }

  return isLogin ? <Redirect to="/" /> : route;
};

AuthRoute.propTypes = {
  checkAuth: PropTypes.func.isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  redirect: PropTypes.string,
  component: PropTypes.func
};

AuthRoute.defaultProps = {
  exact: null,
  redirect: null,
  component: null
};

export default AuthRoute;
