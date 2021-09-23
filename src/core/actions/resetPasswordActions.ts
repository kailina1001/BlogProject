import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";

export const setEmailResetPasswordAction = createAction(
  ACTIONS.SET_EMAIL_RESET_PASSWORD
)<string>();
