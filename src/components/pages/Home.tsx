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

export const Home = memo(() => {
  return (
    <div>
      <MainTemplate
        titleBlock={
          <div className="main-page-title">
            <Title title={"Make your Blog Online"} />
          </div>
        }
        mainBlock={
          <div>
            <div className="inputs-wrapper">
              <div className="main-page-text">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the ...
                </p>
              </div>
              <Link className="for-link" to={"/login"}>
                <Button text={"Learn more"} />
              </Link>
            </div>
          </div>
        }
      />
    </div>
  );
});
