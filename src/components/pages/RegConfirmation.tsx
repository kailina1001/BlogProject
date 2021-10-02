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
  useParams,
} from "react-router-dom";
import { getRegistrationSelector } from "../../core/selectors/registrationSelectors";
import { useDispatch, useSelector } from "react-redux";
import {
  setEmailAction,
  setUserNameAction,
  setPasswordAction,
  setConfirmPasswordAction,
  sendRegistrationConfirmationAction,
} from "../../core";

const renderTitle = () => {
  return <Title title={"Confirmation Registration"} isActive={false} />;
};

export const RegConfirmation = memo(() => {
  const { email } = useSelector(getRegistrationSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const handlerChangePage = () => {
    history.push("/");
  };
  useEffect(() => {
    return () => {
      dispatch(setEmailAction(""));
      dispatch(setUserNameAction(""));
      dispatch(setPasswordAction(""));
      dispatch(setConfirmPasswordAction(""));
    };
  }, [dispatch]);

  const params = useParams() as any;
  console.log({ params });

  useEffect(() => {
    if (params?.uid && params?.token) {
      dispatch(sendRegistrationConfirmationAction(params));
    }
  }, [dispatch, params, params?.token, params?.uid]);

  return (
    <div>
      <MainTemplate
        titleBlock={
          <Title title={"Registration Confirmation"} isActive={true} />
        }
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Please activate your account with</p>
                <p>
                  the activation link in the email{" "}
                  <a href={`mailto:${email}`} className="confirmation-link">
                    {email}
                  </a>
                </p>
                <p>Please, check your email</p>
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

/*   return (
    <MainTemplate
      titleBlock={renderTitle()}
      mainBlock={<Title title={"Successfully!"} isActive={true} />}
    />
  );
}); */
