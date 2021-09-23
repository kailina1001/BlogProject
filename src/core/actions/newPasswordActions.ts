import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setNewPasswordAction = createAction(
  ACTIONS.SET_NEW_PASSWORD
)<string>();

export const setNewPasswordConfirmAction = createAction(
  ACTIONS.SET_NEW_PASSWORD_CONFIRM
)<string>();
