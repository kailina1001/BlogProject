import { newPasswordReducer } from "./reducers/newPasswordReducer";
import { resetPasswordReducer } from "./reducers/resetPasswordReducer";
import { loginReducer } from "./reducers/loginReducer";
import { combineReducers } from "redux";

import { appReducer, registrationReducer } from "../core/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer,
  email_reset_password: resetPasswordReducer,
  new_password: newPasswordReducer,
});
