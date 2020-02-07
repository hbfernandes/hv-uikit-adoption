/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { ViewsState } from "typings/views";

const views = {
  data: [
    {
      label: "Overview",
      path: "/"
    },
    {
      label: "Events",
      path: "/events"
    }
  ]
};

const fetchViews = async (): Promise<ViewsState> => {
  return new Promise<ViewsState>(resolve => {
    setTimeout(() => resolve(views), 500);
  });
};

export { fetchViews };
