import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setEmailLoginAction = createAction(
  ACTIONS.SET_EMAIL_LOGIN
)<string>();

export const setPasswordLoginAction = createAction(
  ACTIONS.SET_PASSWORD_LOGIN
)<string>();
