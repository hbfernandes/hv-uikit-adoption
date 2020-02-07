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
import { authenticate } from "lib/api/auth";
import { AuthCredentials } from "typings/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { setAuth } from "./actions";

const login = (credentials: AuthCredentials) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    const token: string = await authenticate(credentials);
    setCookie({
      key: "token",
      value: token
    });
    dispatch(setAuth(true));
  } catch (error) {
    removeCookie("token");
    dispatch(setAuth(false));
  }
};

const logout = () => async (dispatch: Dispatch): Promise<void> => {
  removeCookie("token");
  dispatch(setAuth(false));
};

const checkAuth = () => async (dispatch: Dispatch): Promise<void> => {
  const token = getCookie("token");
  dispatch(setAuth(Boolean(token)));
};

export { login, logout, checkAuth };
