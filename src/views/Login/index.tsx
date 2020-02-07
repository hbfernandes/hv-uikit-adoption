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
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { login } from "store/auth/thunks";
import styles from "./styles";
import Login from "./Login";

const mapStateToProps = ({ auth }: AppState) => ({
  auth
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      login
    },
    dispatch
  );

export type LoginProps = WithStyles<typeof styles> &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default withStyles(styles, { name: "Login", withTheme: true })(
  connect(mapStateToProps, mapDispatchToProps)(Login)
);
