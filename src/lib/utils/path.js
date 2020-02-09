/**
 * Copyright (c) 2020 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

const getSelection = (data, path, idx, selection = []) => {
  data.forEach((element, i) => {
    if (element.path === path) selection.push(i, idx);
    if (element.subData) getSelection(element.subData.data, path, i, selection);
  });

  return selection.filter(item => item !== undefined).reverse();
};

const getSelectedPath = (router, data) => {
  const { pathname } = router.location;
  return getSelection(data, pathname);
};

export { getSelectedPath };
