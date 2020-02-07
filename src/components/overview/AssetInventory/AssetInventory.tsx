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
import HvAssetInventory from "@hv/uikit-react-core/dist/AssetInventory";
import HvCardView from "@hv/uikit-react-core/dist/AssetInventory/CardView";
import HvListView from "@hv/uikit-react-core/dist/AssetInventory/ListView";
import Cards from "@hv/uikit-react-icons/dist/Generic/Cards";
import List from "@hv/uikit-react-icons/dist/Generic/List";
import { CardRender, ListRender } from "components/overview";
import assetInventoryConfiguration from "./configuration";
import getData from "./data";
import { AssetInventoryStyles } from "./index";

const actions = [
  { id: "details", label: "Details", disabled: false },
  { id: "dismiss", label: "Dismiss", disabled: false }
];

const AssetInventory: React.FC<AssetInventoryStyles> = () => (
  <HvAssetInventory
    values={getData()}
    configuration={assetInventoryConfiguration}
    actions={actions}
    maxVisibleActions={3}>
    <HvCardView id="card" icon={<Cards />} renderer={CardRender} />
    <HvListView id="list" icon={<List />} renderer={ListRender} />
  </HvAssetInventory>
);

export default AssetInventory;
