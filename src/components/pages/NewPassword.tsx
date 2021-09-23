import React, { useEffect, useState } from "react";
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
import { getNewPasswordSelector } from "../../core/selectors/newPasswordSelectors";
import { validatePassword, validateConfirmPassword } from "../helper/helpers";
import {
  setNewPasswordAction,
  setNewPasswordConfirmAction,
} from "../../core/actions/newPasswordActions";

export const NewPassword = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { new_password, new_password_confirm } = useSelector(
    getNewPasswordSelector
  );

  const isValidNewPassword = validatePassword(new_password);
  const isValidNewPasswordConfirm = validateConfirmPassword(
    new_password,
    new_password_confirm
  );

  useEffect(() => {
    return () => {
      dispatch(setNewPasswordAction(""));
      dispatch(setNewPasswordConfirmAction(""));
    };
  }, [dispatch]);

  const newPasswordUser = () => {
    if (isValidNewPassword && isValidNewPasswordConfirm) {
      history.push("/success-new-password");
    }
  };

  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"New password"} isActive={true} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Please enter new password</p>
              </div>
              <form>
                <Input
                  text={"New password"}
                  type={"password"}
                  value={new_password}
                  isValid={isValidNewPassword}
                  onChangeHandler={(text: string) =>
                    dispatch(setNewPasswordAction(text.trim()))
                  }
                />
                <Input
                  text={"Confirm password"}
                  type={"password"}
                  value={new_password_confirm}
                  isValid={isValidNewPasswordConfirm}
                  onChangeHandler={(text: string) =>
                    dispatch(setNewPasswordConfirmAction(text.trim()))
                  }
                />
                <Link className="for-link" to={"/success-new-password"}>
                  <Button
                    text={"Set password"}
                    isValid={isValidNewPassword && isValidNewPasswordConfirm}
                    onClick={newPasswordUser}
                  />
                </Link>
              </form>
            </div>
          </div>
        }
      />
    </div>
  );
});
