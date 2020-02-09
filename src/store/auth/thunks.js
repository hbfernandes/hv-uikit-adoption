/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { authenticate } from "lib/api/auth";
import { setCookie, removeCookie, getCookie } from "lib/utils/cookie";
import { setAuth } from "./actions";

const login = credentials => async dispatch => {
  try {
    const token = await authenticate(credentials);
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

const logout = () => dispatch => {
  removeCookie("token");
  dispatch(setAuth(false));
};

const checkAuth = () => dispatch => {
  const token = getCookie("token");
  dispatch(setAuth(Boolean(token)));
};

export { login, logout, checkAuth };
