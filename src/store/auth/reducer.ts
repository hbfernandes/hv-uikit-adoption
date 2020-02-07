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
import { AuthState, AuthActions } from "typings/auth";

// Type-safe initialState!
const initialState: AuthState = {
  isAuthed: false
};

const authReducer = createReducer(initialState, {
  [AuthActions.SET_AUTH]: (state, action) => ({
    isAuthed: action.payload
  })
});

export default authReducer;
