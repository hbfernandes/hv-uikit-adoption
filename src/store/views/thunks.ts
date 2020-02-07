/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { Dispatch } from "redux";
import { fetchViews } from "lib/api/views";
import { ViewsState } from "typings/views";
import { setViews } from "./actions";

const getViews = () => async (dispatch: Dispatch): Promise<void> => {
  const views: ViewsState = await fetchViews();
  dispatch(setViews(views));
};

export { getViews };
