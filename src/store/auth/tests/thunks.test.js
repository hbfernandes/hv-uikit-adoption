/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { mockStore } from "lib/utils/tests";
import { login, logout, checkAuth } from "../thunks";
import { AuthActions } from "../actions";

describe("async actions", () => {
  it("should dispatch setAuth when login", async () => {
    const expectedActions = [{ type: AuthActions.SET_AUTH, isAuthed: true }];

    const store = mockStore();
    await store.dispatch(login("some_credentials"));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch setAuth when logout", async () => {
    const expectedActions = [{ type: AuthActions.SET_AUTH, isAuthed: false }];

    const store = mockStore();
    await store.dispatch(logout(logout));

    expect(store.getActions()).toEqual(expectedActions);
  });

  it("should dispatch setAuth when checkAuth", async () => {
    const expectedActions = [{ type: AuthActions.SET_AUTH, isAuthed: false }];

    const store = mockStore();
    await store.dispatch(checkAuth());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
