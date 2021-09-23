import { ActionType, createReducer } from "typesafe-actions";

import { setEmailResetPasswordAction } from "../actions/resetPasswordActions";

export interface IResetPasswordState {
  email_reset_password: string;
}

const defaultState: IResetPasswordState = {
  email_reset_password: "",
};

const actions = {
  setEmailResetPasswordAction,
};

export const resetPasswordReducer = createReducer<
  IResetPasswordState,
  ActionType<typeof actions>
>(defaultState).handleAction(
  setEmailResetPasswordAction,
  (state, { payload: email_reset_password }) => ({
    ...state,
    email_reset_password,
  })
);
