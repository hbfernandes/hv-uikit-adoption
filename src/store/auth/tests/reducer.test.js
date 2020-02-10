/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import authReducer from "../reducer";
import { AuthActions } from "../actions";

describe("auth reducer", () => {
  const initialState = {
    isAuthed: true
  };

  it("set default state", () => {
    const newState = authReducer(undefined, { type: "MOCK_TYPE" });

    expect(newState).toEqual(initialState);
  });

  it("set auth sate", () => {
    const action = {
      type: AuthActions.SET_AUTH,
      isAuthed: true
    };

    const newState = authReducer(null, action);

    expect(newState).toEqual({
      isAuthed: true
    });
  });
});
