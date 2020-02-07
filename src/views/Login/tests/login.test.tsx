/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React from "react";
import { create, ReactTestRenderer } from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import Login from "../index";

const mockStore = configureStore();

describe("<Login />", () => {
  let snapshot: ReactTestRenderer;

  beforeEach(() => {
    const header = (
      <Provider store={mockStore()}>
        <HvProvider>
          <Login />
        </HvProvider>
      </Provider>
    );

    snapshot = create(header);
  });

  test("it matches the snapshot", () => {
    expect(snapshot.toJSON()).toMatchSnapshot();
  });
});
