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

export const SuccessNewPassword = memo(() => {
  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"Success"} isActive={true} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Email confirmed.</p>
                <p>Your registration is now completed </p>
              </div>
              <Link className="for-link" to={"/login"}>
                <Button text={"Login"} />
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
});
