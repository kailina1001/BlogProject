import { ActionType, createReducer } from "typesafe-actions";

import { setEmailLoginAction } from "../actions/loginActions";

import { setPasswordLoginAction } from "../actions/loginActions";

export interface ILoginState {
  email_login: string;
  password_login: string;
}

const defaultState: ILoginState = {
  email_login: "",
  password_login: "",
};

const actions = {
  setEmailLoginAction,
  setPasswordLoginAction,
};

export const loginReducer = createReducer<
  ILoginState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setEmailLoginAction, (state, { payload: email_login }) => ({
    ...state,
    email_login,
  }))
  .handleAction(
    setPasswordLoginAction,
    (state, { payload: password_login }) => ({
      ...state,
      password_login,
    })
  );
