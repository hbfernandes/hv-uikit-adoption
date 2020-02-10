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
import CDFDashboard from "./CDFDashboard";

/**
 * CDFDashboards factory component. 
 * @param {Object} component - The CDFDashboard component.
 */
const CDFDashboardFactory = component => ({ editorActions = {}, ...props }) => {
  const path = component.componentProperties.find(property => property.key === "path").value || "";
  return (
    <CDFDashboard path={path} {...props} />
  );
};

export default CDFDashboardFactory;
