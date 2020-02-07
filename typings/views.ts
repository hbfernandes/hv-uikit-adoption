/**
 * Copyright (c) 2019 Hitachi Vantara Corporation.
 *
 *  The copyright to the computer software herein is the property of
 *  Hitachi Vantara Corporation. The software may be used and/or copied only
 *  with the written permission of Hitachi Vantara Corporation or in accordance
 *  with the terms and conditions stipulated in the agreement/contract
 *  under which the software has been supplied.
 */

// Use enums for better autocompletion of action type names.
//
// We use the `@@context/ACTION_TYPE` convention,
// to follow the convention of Redux's `@@INIT` action.
export enum ViewsActions {
  GET_VIEWS = "@@layout/GET_VIEWS",
  SET_VIEWS = "@@layout/SET_VIEWS"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ViewsState {
  readonly data: View[];
}

export interface View {
  label: string;
  path: string;
}
