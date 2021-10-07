import { memo } from "react";
import { MainTemplate } from "../template/MainTemplate";
import { Title } from "../atoms/Title/Title";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoginSelector } from "../../core/selectors/loginSelectors";
import { validateEmail, validatePassword } from "../helper/helpers";
import {
  sendLoginDataAction,
  setEmailLoginAction,
  setPasswordLoginAction,
} from "../../core/actions/loginActions";

export const Login = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { password, email, error, isSuccess } = useSelector(getLoginSelector);

  const isValidEmailLogin = validateEmail(email);
  const isValidPasswordLogin = validatePassword(password);

  useEffect(() => {
    return () => {
      dispatch(setEmailLoginAction(""));
      dispatch(setPasswordLoginAction(""));
    };
  }, [dispatch]);

  const loginUser = () => {
    if (isValidEmailLogin && isValidPasswordLogin) {
      dispatch(
        sendLoginDataAction({
          password,
          email,
        })
      );
    }
  };
  /*   const loginUser = () => {
    if (isValidEmailLogin) {
      history.push("/");
    }
  }; */

  useEffect(() => {
    if (isSuccess) {
      history.push("/all-posts");
    }
  }, [history, isSuccess]);

  return (
    <div className="login-page">
      <MainTemplate
        titleBlock={
          <div className="login-title">
            <Link className="for-link" to={"/login"}>
              <Title title={"Login"} isActive={true} />{" "}
            </Link>
            <Title title={" | "} isActive={true} />
            <Link className="for-link" to={"/registration"}>
              <Title title={"Registration"} isActive={false} />
            </Link>
          </div>
        }
        mainBlock={
          <div className="inputs-wrapper">
            <div>
              <Input
                text={"Email"}
                type={"email"}
                value={email}
                isValid={isValidEmailLogin}
                onChangeHandler={(text: string) =>
                  dispatch(setEmailLoginAction(text.trim()))
                }
              />
              <Input
                text={"Password"}
                type={"password"}
                value={password}
                isValid={isValidPasswordLogin}
                onChangeHandler={(text: string) =>
                  dispatch(setPasswordLoginAction(text.trim()))
                }
              />

              {error}
              <Button
                text={"Login"}
                isValid={isValidEmailLogin && isValidPasswordLogin}
                onClick={loginUser}
              />
            </div>
            <p>
              Forgot your password?{" "}
              <Link className="for-link" to={"/reset-password"}>
                Reset password{" "}
              </Link>
            </p>
          </div>
        }
      />
    </div>
  );
});
