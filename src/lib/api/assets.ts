/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { Assets, Asset } from "typings/assets";

const getRandom = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const riskDownTime = {
  headerTitle: "Downtime track ",
  event: {
    description: "Risk of downtime on Truck 12",
    timestamp: "2 minutes ago",
    schedule: "fix now"
  },
  relatedAssets: "Track A, Zone 15 Brake"
};

const severeBreakdown = {
  headerTitle: "Track severe ",
  event: {
    description: "Track severe breakdown",
    timestamp: "2 hours ago",
    schedule: "fix 3rd shift"
  },
  relatedAssets: "Track B, Load 2 Brake"
};

const generateData = (id: number) => {
  const risk = getRandom(100, 1);
  const timeHorizon = getRandom(8, 1);
  const data = getRandom(10, 1) % 2 === 0 ? riskDownTime : severeBreakdown;

  return {
    headerTitle: data.headerTitle + (id + 1),
    id: `id_${id}`,
    event: data.event,
    probability: risk,
    timeHorizon,
    relatedAssets: data.relatedAssets,
    checkboxValue: `id_${id}`
  };
};

const generateAssets = () => {
  const assets: Assets = { data: [] };

  for (let i = 0; i < 20; i += 1) {
    const data: Asset = generateData(i);
    assets.data.push(data);
  }

  return assets;
};

const fetchAssets = async (): Promise<Assets> => {
  return new Promise<Assets>(resolve => {
    setTimeout(() => resolve(generateAssets()), 500);
  });
};

export { fetchAssets };
