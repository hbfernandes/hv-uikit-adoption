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
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import HvHeader, {
  HvHeaderBrand,
  HvHeaderActions,
  HvHeaderNavigation
} from "@hv/uikit-react-core/dist/NewHeader";
import HvButton from "@hv/uikit-react-core/dist/Button";
import User from "@hv/uikit-react-icons/dist/Generic/User";
import UBSLogo from "assets/ubs-logo.svg";
import { getSelection } from "lib/utils/path";

const boxStyles = {
  width: 32,
  height: 32
};

const navigationData = [
  {
    id: "1",
    label: "Migration Management Tool",
    path: "/migration-management-tool"
  },
  {
    id: "2",
    label: "Operational Reports",
    data: [
      {
        id: "2-1",
        label: "Migration Job Monitoring",
        path: "/operational-reports/migration-job-monitoring"
      },
      {
        id: "2-2",
        label: "Management",
        path: "/operational-reports/management"
      }
    ]
  }
];

const Header = ({ router, auth, logout }) => {
  const history = useHistory();
  const { t } = useTranslation();

  const { isAuthed } = auth;
  const { pathname } = router.location;

  const selection = getSelection(navigationData, pathname);

  const handleChange = (evt, selectedItem) => {
    if (selectedItem.path) history.push(selectedItem.path);
  };

  return (
    <HvHeader position="relative">
      <HvHeaderBrand
        logo={<UBSLogo width="70px" height="25px" />}
        name={t("components.layout.header.appName")}
      />
      {isAuthed && (
        <HvHeaderNavigation
          data={navigationData}
          selected={selection.id}
          onClick={handleChange}
        />
      )}
      {isAuthed && (
        <HvHeaderActions>
          <HvButton
            category="icon"
            onClick={() => logout()}
            aria-label="Open User panel">
            <User boxStyles={boxStyles} />
          </HvButton>
        </HvHeaderActions>
      )}
    </HvHeader>
  );
};

Header.propTypes = {
  router: PropTypes.instanceOf(Object).isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
