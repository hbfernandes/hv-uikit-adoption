/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { AppState } from "typings/state";
import { checkAuth } from "store/auth/thunks";
import AuthRoute from "./AuthRoute";

const mapStateToProps = ({ auth }: AppState) => ({
  auth
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      checkAuth
    },
    dispatch
  );

export type AuthRouteProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
