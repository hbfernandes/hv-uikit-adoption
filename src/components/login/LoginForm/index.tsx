/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import withStyles, { WithStyles } from "@material-ui/core/styles/withStyles";
import { AuthProps } from "typings/auth";
import styles from "./styles";
import LoginForm from "./LoginForm";

export type LoginFormProps = WithStyles<typeof styles> & AuthProps;

export default withStyles(styles, { name: "LoginForm", withTheme: true })(
  LoginForm
);
