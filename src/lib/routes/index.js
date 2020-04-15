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
import { Route, Switch } from "react-router";
import Login from "pages/Login";
import Overview from "pages/Overview";
import Asset from "pages/Asset";
import NotFound from "pages/NotFound";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/overview" />
    <AuthRoute path="/overview" component={Overview} />
    <AuthRoute path="/asset/:id" component={Asset} />
    <AuthRoute path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
