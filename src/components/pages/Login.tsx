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

export const Login = memo(() => {
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
            <form>
              <Input searchValue={" "} text={"Email"} type={"email"} />
              <Input searchValue={" "} text={"Password"} type={"password"} />
              <Button text={"Login"} />
            </form>
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
