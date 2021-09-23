import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setEmailAction = createAction(ACTIONS.SET_EMAIL)<string>();

export const setUserNameAction = createAction(ACTIONS.SET_USERNAME)<string>();

export const setPasswordAction = createAction(ACTIONS.SET_PASSWORD)<string>();

export const setConfirmPasswordAction = createAction(
  ACTIONS.SET_CONFIRM_PASSWORD
)<string>();
