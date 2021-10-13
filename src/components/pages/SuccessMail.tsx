import React, { useEffect, useState } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { MainTemplate } from "../template/MainTemplate";
import { useDispatch, useSelector } from "react-redux";
import { getRegistrationSelector } from "../../core/selectors/registrationSelectors";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useParams,
} from "react-router-dom";
import {
  setEmailAction,
  setUserNameAction,
  setPasswordAction,
  setConfirmPasswordAction,
  sendRegistrationConfirmationAction,
} from "../../core";

export const SuccessMail = memo(() => {
  const history = useHistory();
  const saccessMail = () => {
    history.push("/login");
  };
  const params = useParams() as any;
  const dispatch = useDispatch();
  console.log(`params#####`, params);

  useEffect(() => {
    if (params?.uid && params?.token) {
      dispatch(sendRegistrationConfirmationAction(params));
    }
  }, [dispatch, params, params?.token, params?.uid]);
  return (
    <MainTemplate
      titleBlock={<Title title={"Success"} isActive={true} />}
      mainBlock={
        <div className="input-center">
          <div className="confirmation-wrapper">
            <p>Email confirmed.</p>
            <p>Your registration is now completed</p>
          </div>
          <Button text={"Login"} isValid={true} onClick={saccessMail} />
          <p className="login-text"></p>
          <p className="login-text"></p>
        </div>
      }
    />
  );
});
