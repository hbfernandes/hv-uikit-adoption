/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import authReducer from "./auth/reducer";

const createRootReducer = history =>
  combineReducers({
    auth: authReducer,
    router: connectRouter(history)
  });

export default createRootReducer;
