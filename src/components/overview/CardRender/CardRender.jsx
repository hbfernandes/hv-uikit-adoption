/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import HvGrid from "@hv/uikit-react-core/dist/Grid";
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import HvKpi from "@hv/uikit-react-core/dist/Kpi";
import HvCard from "@hv/uikit-react-core/dist/Card";
import Level1 from "@hv/uikit-react-icons/dist/Generic/Level1";
import Level2 from "@hv/uikit-react-icons/dist/Generic/Level2.Average";
import Level3 from "@hv/uikit-react-icons/dist/Generic/Level3.Bad";
import Level4 from "@hv/uikit-react-icons/dist/Generic/Level4";
import Level5 from "@hv/uikit-react-icons/dist/Generic/Level5";
import styles from "./styles";

const KpiProbability = score => ({
  title: "Probability",
  indicator: `${score}%`
});

const KpiTimeHorizon = score => ({
  title: "Time horizon",
  indicator: `${score}h`
});

/* eslint react/prop-types: 0 */
const Content = ({ classes, values }) => (
  <>
    <HvGrid container className={classes.container}>
      <HvGrid item xs={4} sm={8} md={12} lg={12} xl={12}>
        <div className={classes.kpis}>
          <HvTypography className={classes.timestamp} variant="infoText">
            {values.event.timestamp}
          </HvTypography>
          <HvTypography variant="infoText">
            {values.event.schedule}
          </HvTypography>
        </div>
      </HvGrid>

      <HvGrid item xs={4} sm={8} md={12} lg={12} xl={12}>
        <div className={classes.kpis}>
          <HvKpi labels={KpiProbability(values.probability)} />
          <HvKpi labels={KpiTimeHorizon(values.timeHorizon)} />
        </div>
      </HvGrid>

      <HvGrid
        item
        xs={4}
        sm={8}
        md={12}
        lg={12}
        xl={12}
        className={classes.item}>
        <HvTypography variant="labelText">Related assets</HvTypography>
        <HvTypography variant="normalText" className={classes.text}>
          {values.relatedAssets}
        </HvTypography>
      </HvGrid>
    </HvGrid>
  </>
);

const ContentWithStyles = withStyles(styles, {
  withTheme: true
})(Content);

/**
 * Render passed to the CardView.
 *
 * @param data
 * @param viewConfiguration
 * @returns {*}
 */
const CardRender = (data, viewConfiguration) => {
  const status = {};
  const { probability } = data;

  switch (true) {
    default:
    case probability < 20:
      status.Icon = <Level1 semantic="sema9" />;
      status.sema = "sema10";
      break;
    case probability < 40:
      status.Icon = <Level2 semantic="sema10" />;
      status.sema = "sema11";
      break;
    case probability < 60:
      status.Icon = <Level3 semantic="sema11" />;
      status.sema = "sema12";
      break;
    case probability < 80:
      status.Icon = <Level4 semantic="sema12" />;
      status.sema = "sema13";
      break;
    case probability <= 100:
      status.Icon = <Level5 semantic="sema13" />;
      status.sema = "sema14";
      break;
  }

  return (
    <HvCard
      icon={status.Icon}
      headerTitle={data.headerTitle}
      innerCardContent={<ContentWithStyles values={data} icon={status.Icon} />}
      semantic={status.sema}
      checkboxValue={data.id}
      isSelectable={viewConfiguration.isSelectable}
      onChange={viewConfiguration.onSelection}
      actions={viewConfiguration.actions}
      maxVisibleActions={viewConfiguration.maxVisibleActions}
      actionsCallback={viewConfiguration.actionsCallback}
    />
  );
};

export default CardRender;
