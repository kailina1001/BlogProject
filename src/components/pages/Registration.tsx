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

export const Registration = memo(() => {
  return (
    <div className="">
      <MainTemplate
        titleBlock={
          <div className="login-title">
            <Link className="for-link" to={"/login"}>
              <Title title={"Login"} />{" "}
            </Link>
            <Title title={" | "} />
            <Link className="for-link" to={"/registration"}>
              <Title title={"Registration"} />
            </Link>
          </div>
        }
        mainBlock={
          <div className="inputs-wrapper">
            <Input searchValue={" "} text={"User Name"} type={"text"} />
            <Input searchValue={" "} text={"Email"} type={"email"} />
            <Input searchValue={" "} text={"Password"} type={"password"} />
            <Input
              searchValue={" "}
              text={"Confirm password"}
              type={"password"}
            />
            <Link className="for-link" to={"/reg-confirmation"}>
              <Button text={"Login"} />
            </Link>

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
