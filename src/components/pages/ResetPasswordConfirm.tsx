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
import { useSelector } from "react-redux";
import { getResetPasswordSelector } from "../../core/selectors/resetPasswordSelectors";

export const ResetPasswordConfirm = memo(() => {
  const history = useHistory();
  const handlerChangePage = () => {
    history.push("/");
  };

  const { email_reset_password } = useSelector(getResetPasswordSelector);
  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"Reset password"} isActive={true} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>
                  You will receive an email{" "}
                  <a
                    href={`mailto:${email_reset_password}`}
                    className="confirmation-link"
                  >
                    {email_reset_password}
                  </a>
                </p>
                <p>with a link to reset your password</p>
              </div>
              <Button
                text={"Home"}
                onClick={handlerChangePage}
                isValid={true}
              />
            </div>
          </div>
        }
      />
    </div>
  );
});
