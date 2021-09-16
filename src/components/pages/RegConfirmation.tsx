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
} from "react-router-dom";

export const RegConfirmation = memo(() => {
  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"Registration Confirmation"} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Please activate your account with</p>
                <p>
                  the activation link in the email{" "}
                  <a href="#" className="confirmation-link">
                    test@gmail.com
                  </a>
                </p>
                <p>Please, check your email</p>
              </div>
              <Link className="for-link" to={"/home"}>
                <Button text={"Home"} />
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
});
