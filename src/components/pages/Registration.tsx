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
import { getRegistrationSelector } from "../../core/selectors/registrationSelectors";
import {
  validateName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../helper/helpers";
import {
  setEmailAction,
  setUserNameAction,
  setPasswordAction,
  setConfirmPasswordAction,
  sendRegistrationDataAction,
} from "../../core/actions/registrationActions";

export const Registration = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { password, email, confirmPassword, userName, error } = useSelector(
    getRegistrationSelector
  );

  const isValidUserName = validateName(userName);
  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);
  const isValidConfirmPassword = validateConfirmPassword(
    password,
    confirmPassword
  );

  const registrationUser = () => {
    console.log({ userName });

    dispatch(
      sendRegistrationDataAction({
        username: userName,
        password,
        email,
      })
    );
    /*  if (
      isValidUserName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      dispatch(
        sendRegistrationDataAction({
          username: userName,
          password,
          email,
        })
      );
      /*  history.push("/reg-confirmation"); */
    /* } */
  };

  return (
    <div>
      <MainTemplate
        titleBlock={
          <div className="login-title">
            <Link className="for-link" to={"/login"}>
              <Title title={"Login"} isActive={false} />{" "}
            </Link>
            <Title title={" | "} isActive={true} />
            <Link className="for-link" to={"/registration"}>
              <Title title={"Registration"} isActive={true} />
            </Link>
          </div>
        }
        mainBlock={
          <div className="inputs-wrapper">
            <Input
              value={userName}
              text={"User Name"}
              type={"text"}
              isValid={isValidUserName}
              onChangeHandler={(text: string) =>
                dispatch(setUserNameAction(text.trim()))
              }
            />
            <Input
              value={email}
              text={"Email"}
              type={"email"}
              isValid={isValidEmail}
              onChangeHandler={(text: string) =>
                dispatch(setEmailAction(text.trim()))
              }
            />
            <Input
              value={password}
              text={"Password"}
              type={"password"}
              isValid={isValidPassword}
              onChangeHandler={(text: string) =>
                dispatch(setPasswordAction(text.trim()))
              }
            />
            <Input
              value={confirmPassword}
              text={"Confirm password"}
              type={"password"}
              isValid={isValidConfirmPassword}
              onChangeHandler={(text: string) =>
                dispatch(setConfirmPasswordAction(text.trim()))
              }
            />
            <p>{error}</p>
            {/*       <Link className="for-link" to={"/reg-confirmation"}> */}
            <Button
              text={"Login"}
              isValid={
                isValidUserName &&
                isValidEmail &&
                isValidPassword &&
                isValidConfirmPassword
              }
              onClick={registrationUser}
            />

            <p className="login-text">
              If you have account, you can{" "}
              <Link className="for-link" to={"/login"}>
                login
              </Link>
            </p>
          </div>
        }
      />
    </div>
  );
});
