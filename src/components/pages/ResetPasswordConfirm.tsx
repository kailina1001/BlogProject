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

export const ResetPasswordConfirm = memo(() => {
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
                  <a href="#" className="confirmation-link">
                    test@gmail.com
                  </a>
                </p>
                <p>with a link to reset your password</p>
              </div>
              <Link className="for-link" to={"/"}>
                <Button text={"Home"} />
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
});
