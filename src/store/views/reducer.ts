/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */
 
import { createReducer } from "typesafe-actions";
import { ViewsState, ViewsActions } from "typings/views";

// Type-safe initialState!
const initialState: ViewsState = {
  data: []
};

const viewsReducer = createReducer(initialState, {
  [ViewsActions.SET_VIEWS]: (state, action) => action.payload
});

export default viewsReducer;
