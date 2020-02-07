/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import React, { Suspense } from "react";
import { Provider } from "react-redux";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "store";
import Routes from "lib/routes";
import "../config/i18n";

const App: React.FC = () => {
  const routerConfig = {
    // @ts-ignore
    push: route => {
      history.push(route);
    },
    prefetch: () => {}
  };

  return (
    <Provider store={store}>
      <HvProvider router={routerConfig}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes />
          </Suspense>
        </ConnectedRouter>
      </HvProvider>
    </Provider>
  );
};

export default App;
