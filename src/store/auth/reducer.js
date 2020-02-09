/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { AuthActions } from "./actions";

const initialState = {
  isAuthed: true
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActions.SET_AUTH:
      return { ...state, isAuthed: action.isAuthed };
    default:
      return state;
  }
};

export default authReducer;
