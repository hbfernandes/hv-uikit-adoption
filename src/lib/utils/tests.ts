/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import configureMockStore, { MockStore } from "redux-mock-store";
import { createMemoryHistory } from "history";

const mockStore = configureMockStore();

export const store: MockStore = mockStore();
export const history = createMemoryHistory();
