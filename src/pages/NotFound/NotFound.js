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
import HvTypography from "@hv/uikit-react-core/dist/Typography";
import withLayout from "lib/hocs/withLayout";
import { useTranslation } from "react-i18next";

const NotFound = ({ classes }) => {
  const { t } = useTranslation();
  return (
    <HvTypography variant="3xlTitle" className={classes.title}>
      {t("pages.notFound.title")}
    </HvTypography>
  );
};

NotFound.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired
};

export default withLayout(NotFound);
