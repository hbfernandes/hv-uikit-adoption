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
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import withLayout from "lib/hocs/withLayout";
import CTools from "components/common/CTools";

const cdfEmbedPath =
  "http://localhost:8081/pentaho/plugin/pentaho-cdf/api/cdf-embed-callback.js";

const dashboardPath = "/public/BMC/dashboards/overviewAnalytics.wcdf";

const MigrationJobMonitoring = () => {
  return (
    <HvGrid container>
      <HvGrid item xl={12}>
        <CTools cdfEmbedPath={cdfEmbedPath} dashboardPath={dashboardPath} />
      </HvGrid>
    </HvGrid>
  );
};

export default withLayout(MigrationJobMonitoring);
