/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import jsCookie from "js-cookie";

interface Cookie {
  key: string;
  value: string;
}

export const getCookie = (key: string) => jsCookie.get(key);

export const setCookie = ({ key, value }: Cookie) => jsCookie.set(key, value);

export const removeCookie = (key: string) => jsCookie.remove(key);
