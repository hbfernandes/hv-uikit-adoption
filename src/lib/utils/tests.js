/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import { createMemoryHistory } from "history";
import HvProvider from "@hv/uikit-react-core/dist/Provider";

const mockStore = configureMockStore([thunk]);
const memoryHistory = createMemoryHistory();

const createMockStore = mockState => mockStore(mockState);

const withStoreProvider = (Component, store) => props => (
  <Provider store={createMockStore(store)}>
    <HvProvider>
      <MemoryRouter>
        <Component {...props} />
      </MemoryRouter>
    </HvProvider>
  </Provider>
);

const withHvProvider = Component => props => (
  <HvProvider>
    <MemoryRouter>
      <Component {...props} />
    </MemoryRouter>
  </HvProvider>
);

export {
  createMockStore,
  mockStore,
  memoryHistory,
  withStoreProvider,
  withHvProvider
};
