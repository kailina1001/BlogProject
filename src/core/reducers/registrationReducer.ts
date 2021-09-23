import { ActionType, createReducer } from "typesafe-actions";

import { setEmailAction } from "../../core/actions";
import { setUserNameAction } from "../../core/actions";
import { setPasswordAction } from "../../core/actions";
import { setConfirmPasswordAction } from "../../core/actions";

export interface IRegistrationState {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultState: IRegistrationState = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const actions = {
  setEmailAction,
  setUserNameAction,
  setPasswordAction,
  setConfirmPasswordAction,
};

export const registrationReducer = createReducer<
  IRegistrationState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setEmailAction, (state, { payload: email }) => ({
    ...state,
    email,
  }))
  .handleAction(setUserNameAction, (state, { payload: userName }) => ({
    ...state,
    userName,
  }))
  .handleAction(setPasswordAction, (state, { payload: password }) => ({
    ...state,
    password,
  }))
  .handleAction(
    setConfirmPasswordAction,
    (state, { payload: confirmPassword }) => ({
      ...state,
      confirmPassword,
    })
  );
