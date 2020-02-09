/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import jwt from "jsonwebtoken";

const authenticate = async credentials => {
  return new Promise(resolve => {
    const token = jwt.sign(credentials, "someSecret");
    setTimeout(() => resolve(token), 500);
  });
};

export { authenticate };
