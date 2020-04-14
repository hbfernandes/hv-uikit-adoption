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
import Tool from "@hv/uikit-react-icons/dist/Generic/Tool";
import { HvCardView } from '@hv/uikit-react-core/dist'


const CardView = () => {

  const values = (num = 10) => {
    const variations = [
      { semantic: "sema2", subheader: "Machine" },
      { semantic: "sema3", subheader: "Compressor"}
    ];

    return [...Array(num).keys()].map(id => ({
      id: `id_${id}`,
      headerTitle: `Asset Avatar ${id + 1}`,
      checkboxValue: `id_${id}`,
      data: {
        firstContent: "2101cad3-7cd4-1000-bdp95-d8c497176e7c",
        secondContent: "Jun 30, 2015 12:27:53 PM"
      },
      mediaHeight: 186,
      selected: false,
      ...variations[id % variations.length]
    }));
  };

  // --------------- Configuration ----------------
  const myActions = [
    // { id: "post", label: "Add", iconCallback: () => <Add />, disabled: false },
    // { id: "get", label: "Preview", iconCallback: () => <Preview color="atmo7" />, disabled: true },
    // { id: "put", label: "Upload", iconCallback: () => <Upload color="atmo7" />, disabled: true },
    // { id: "delete", label: "Delete", iconCallback: () => <Delete />, disabled: false }
  ];

  const viewConfiguration = {
    onSelection: event => console.log(event.target.checked),
    breakpoints: { xs: false, sm: false, md: 4, lg: 3, xl: 3 },
    isSelectable: true,
    actions: myActions,
    actionsCallback: (e, id, action) =>
      alert(`You have pressed card ${id} with action ${action.label}`)
  };

  return (
    <HvCardView id="id1" icon={<Tool />} values={values()} viewConfiguration={viewConfiguration} />
  );
}

export default CardView;