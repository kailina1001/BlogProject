import * as React from "react";
import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title/Title";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getResetPasswordSelector } from "../../core/selectors/resetPasswordSelectors";
import { validateEmail } from "../helper/helpers";
import { setEmailResetPasswordAction } from "../../core/actions/resetPasswordActions";

export const ResetPassword = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { email_reset_password } = useSelector(getResetPasswordSelector);

  const isValidEmailResetPassword = validateEmail(email_reset_password);

  const resetPassword = () => {
    if (isValidEmailResetPassword) {
      history.push("/reset-password-confirm");
    }
  };

  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"Reset password"} isActive={true} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Please enter the email </p>
                <p>for your account</p>
              </div>
              <form>
                <Input
                  text={"Email"}
                  type={"email"}
                  value={email_reset_password}
                  isValid={isValidEmailResetPassword}
                  onChangeHandler={(text: string) =>
                    dispatch(setEmailResetPasswordAction(text.trim()))
                  }
                />
                <Link className="for-link" to={"/reset-password-confirm"}>
                  <Button
                    text={"Reset"}
                    isValid={isValidEmailResetPassword}
                    onClick={resetPassword}
                  />
                </Link>
              </form>
              <p>
                Return to{" "}
                <Link className="for-link" to={"/login"}>
                  login
                </Link>
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
});
