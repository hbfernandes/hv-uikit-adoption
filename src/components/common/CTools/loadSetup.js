/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

import uuid from "uuid";

function loadSetup(cdfEmbedPath) {
  return new Promise(resolve => {
    const uniqueCallBackFunctionName = `_${uuid()
      .split("-")
      .join("_")}`;

    window[uniqueCallBackFunctionName] = () => {
      resolve(window.require);
    };

    const loadScriptCDF = document.createElement("script");
    loadScriptCDF.async = true;
    loadScriptCDF.src = `${cdfEmbedPath}?callbackFunctionName=${uniqueCallBackFunctionName}`;
    document.head.appendChild(loadScriptCDF);
  });
}

export default loadSetup;
