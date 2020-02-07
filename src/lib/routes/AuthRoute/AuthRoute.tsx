/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { useEffect } from "react";
import { Route, Redirect } from "react-router";
import { AuthRouteProps } from "./index";

interface AuthProps extends AuthRouteProps {
  path?: string;
  exact?: boolean;
  component: React.ComponentType<{}>;
}

const AuthRoute: React.FC<AuthProps> = ({
  checkAuth,
  auth,
  path,
  exact,
  component
}: AuthProps) => {
  const { isAuthed } = auth;
  const isLogin = path === "/login";

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const route = <Route path={path} exact={exact} component={component} />;

  if (isAuthed) {
    return isLogin ? <Redirect to="/" /> : route;
  }

  return isLogin ? route : <Redirect to="/login" />;
};

export default AuthRoute;
