import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

import { IUserLoginAuth } from "../../types/user";

export const setEmailLoginAction = createAction(
  ACTIONS.SET_EMAIL_LOGIN
)<string>();

export const setPasswordLoginAction = createAction(
  ACTIONS.SET_PASSWORD_LOGIN
)<string>();

/* export const setConfirmPasswordAction = createAction(
  ACTIONS.SET_CONFIRM_PASSWORD
)<string>(); */

export const sendLoginDataAction = createAction(
  ACTIONS.SEND_LOGIN_DATA
)<IUserLoginAuth>();

export const sendLoginDataErrorAction = createAction(
  ACTIONS.SEND_LOGIN_DATA_ERROR
)<string | null>();

export const sendLoginDataSuccessAction = createAction(
  ACTIONS.SEND_LOGIN_DATA_SUCCESS
)<boolean>();
