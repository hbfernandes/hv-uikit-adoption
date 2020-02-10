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
import { mount } from "enzyme";
import { withStoreProvider } from "lib/utils/tests";
import Header from "../index";

describe("<Header />", () => {
  let component;

  const WithStoreProvider = withStoreProvider(Header, {
    router: { location: { pathname: "/" } },
    auth: { isAuthed: false },
    logout: jest.fn()
  });

  beforeEach(() => {
    component = mount(<WithStoreProvider />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
