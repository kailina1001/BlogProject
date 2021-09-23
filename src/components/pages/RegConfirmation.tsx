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
import { getRegistrationSelector } from "../../core/selectors/registrationSelectors";
import { useSelector } from "react-redux";

export const RegConfirmation = memo(() => {
  const history = useHistory();
  const handlerChangePage = () => {
    history.push("/");
  };

  const { email } = useSelector(getRegistrationSelector);
  return (
    <div className="">
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
