/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { checkAuth } from "store/auth/thunks";
import AuthRoute from "./AuthRoute";

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      checkAuth
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(AuthRoute);
