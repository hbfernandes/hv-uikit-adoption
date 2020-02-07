/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { shallow } from "enzyme";
import React from "react";
import withLayout from "../withLayout";

describe("withLayout", () => {
  let wrapper;

  const checkComponent = (Component: React.ComponentType) => {
    wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    checkComponent(withLayout(React.Component));
    checkComponent(withLayout(React.Component, true));
  });
});
