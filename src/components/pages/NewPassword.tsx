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

export const NewPassword = memo(() => {
  return (
    <div className="">
      <MainTemplate
        titleBlock={<Title title={"New password"} isActive={true} />}
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="page-text">
                <p>Please enter new password</p>
              </div>
              <form>
                <Input
                  searchValue={" "}
                  text={"New password"}
                  type={"password"}
                />
                <Input
                  searchValue={" "}
                  text={"Confirm password"}
                  type={"password"}
                />
                <Link className="for-link" to={"/success-new-password"}>
                  <Button text={"Set password"} />
                </Link>
              </form>
            </div>
          </div>
        }
      />
    </div>
  );
});
