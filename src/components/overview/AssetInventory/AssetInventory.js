/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HvAssetInventory from "@hv/uikit-react-core/dist/AssetInventory";
import HvCardView from "@hv/uikit-react-core/dist/AssetInventory/CardView";
import HvListView from "@hv/uikit-react-core/dist/AssetInventory/ListView";
import Cards from "@hv/uikit-react-icons/dist/Generic/Cards";
import List from "@hv/uikit-react-icons/dist/Generic/List";
import CardRender from "../CardRender";
import ListRender from "../ListRender";
import configuration from "./configuration";
import { fetchAssets } from "../../../lib/api/assets";

const actions = [{ id: "details", label: "Details", disabled: false }];

const AssetInventory = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  const handleAction = id => {
    history.push(`/asset/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAssets();
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    data.length > 0 && (
      <HvAssetInventory
        values={data}
        configuration={configuration}
        actions={actions}
        maxVisibleActions={3}
        actionsCallback={handleAction}>
        <HvCardView id="card" icon={<Cards />} renderer={CardRender} />
        <HvListView id="list" icon={<List />} renderer={ListRender} />
      </HvAssetInventory>
    )
  );
};

export default AssetInventory;
