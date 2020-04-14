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
import { HvTextArea } from '@hv/uikit-react-core/dist';

const SimpleThing = () => {
  const labels = {
    inputLabel: "Label",
    placeholder: "Enter value"
  };
  
  return <HvTextArea label="Text Area" labels={labels} id="test" width={610} />;
}

export default SimpleThing;