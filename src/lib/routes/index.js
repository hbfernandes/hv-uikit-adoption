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
import MigrationManagementTool from "pages/MigrationManagementTool";
import MigrationJobMonitoring from "pages/MigrationJobMonitoring";
import Management from "pages/Management";
import NotFound from "pages/NotFound";
import AuthRoute from "./AuthRoute";

const Routes = () => (
  <Switch>
    <AuthRoute path="/" exact redirect="/migration-management-tool" />
    <AuthRoute
      path="/migration-management-tool"
      component={MigrationManagementTool}
    />
    <AuthRoute
      path="/operational-reports/migration-job-monitoring"
      component={MigrationJobMonitoring}
    />
    <AuthRoute path="/operational-reports/management" component={Management} />
    <AuthRoute path="/login" exact component={Login} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
