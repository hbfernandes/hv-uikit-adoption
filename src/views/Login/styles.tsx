/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { createStyles } from "@material-ui/core";

const styles = () =>
  createStyles({
    root: {
      height: "calc(100vh - 90px)",
      "& > div": {
        margin: 0
      }
    }
  });

export default styles;
