import { ActionType, createReducer } from "typesafe-actions";

import { setNewPasswordAction } from "../actions/newPasswordActions";

import { setNewPasswordConfirmAction } from "../actions/newPasswordActions";

export interface INewPasswordState {
  new_password: string;
  new_password_confirm: string;
}

const defaultState: INewPasswordState = {
  new_password: "",
  new_password_confirm: "",
};

const actions = {
  setNewPasswordAction,
  setNewPasswordConfirmAction,
};

export const newPasswordReducer = createReducer<
  INewPasswordState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setNewPasswordAction, (state, { payload: new_password }) => ({
    ...state,
    new_password,
  }))
  .handleAction(
    setNewPasswordConfirmAction,
    (state, { payload: new_password_confirm }) => ({
      ...state,
      new_password_confirm,
    })
  );
