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
import { shallow } from "enzyme";
import withLayout from "../withLayout";

describe("withLayout", () => {
  let wrapper;

  const checkComponent = (Component) => {
    wrapper = shallow(<Component />);
    expect(wrapper).toMatchSnapshot();
  };

  it("is rendered correctly", () => {
    checkComponent(withLayout(React.Component));
    checkComponent(withLayout(React.Component, true));
  });
});
