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

export const ResetPassword = memo(() => {
  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"Reset password"} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Please enter the email </p>
                <p>for your account</p>
              </div>
              <form>
                <Input searchValue={" "} text={"Email"} type={"email"} />
                <Link className="for-link" to={"/reset-password-confirm"}>
                  <Button text={"Reset"} />
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
