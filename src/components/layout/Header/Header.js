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
import HvHeader from "@hv/uikit-react-core/dist/Header";
import HvUserIcon from "@hv/uikit-react-icons/dist/Generic/User";
import { getSelectedPath } from "lib/utils/path";
import HitachiLogo from "assets/hitachi-logo.svg";

const pages = {
  data: [
    {
      label: "Overview",
      path: "/overview"
    },
    {
      label: "Events",
      subData: {
        data: [
          {
            label: "Work Orders",
            path: "/events/work-orders"
          }
        ]
      }
    },
    {
      label: "Asset",
      path: "/asset"
    },
    {
      label: "Analytics",
      subData: {
        data: [
          {
            label: "Model Effectiveness",
            path: "/analytics/model-effectiveness"
          },
          {
            label: "Trend Analysis",
            path: "/analytics/trend-analysis"
          }
        ]
      }
    }
  ]
};

const Header = ({ router, auth, logout }) => {
  const { t } = useTranslation();
  const { isAuthed } = auth;
  const { data } = pages;
  const selectedPath = getSelectedPath(router, data);

  return (
    <HvHeader
      companyLogo={<HitachiLogo width="100px" />}
      label={t("components.layout.header.appName")}
      actionValues={[
        {
          label: "User",
          horizontalItemAction: <HvUserIcon onClick={() => logout()} />
        }
      ]}
      {...(isAuthed && { navigationStructure: { data } })} // TODO -> navigation should handle undefined values ??
      useRouter
      selected={selectedPath}
    />
  );
};

Header.propTypes = {
  router: PropTypes.instanceOf(Object).isRequired,
  auth: PropTypes.instanceOf(Object).isRequired,
  logout: PropTypes.func.isRequired
};

export default Header;
