import { newPasswordReducer } from "./reducers/newPasswordReducer";
import { resetPasswordReducer } from "./reducers/resetPasswordReducer";
import { combineReducers } from "redux";
import {
  appReducer,
  registrationReducer,
  loginReducer,
} from "../core/reducers";
import { postsReducer } from "./reducers/postsReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer,
  email_reset_password: resetPasswordReducer,
  new_password: newPasswordReducer,
  posts: postsReducer,
});
