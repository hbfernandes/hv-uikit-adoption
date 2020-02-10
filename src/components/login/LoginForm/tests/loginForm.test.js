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
import { withHvProvider } from "lib/utils/tests";
import LoginForm from "../index";

describe("<LoginForm />", () => {
  let component;

  beforeEach(() => {
    const WithHvProvider = withHvProvider(LoginForm);
    component = mount(<WithHvProvider login={jest.fn()} />);
  });

  it("it matches the snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
