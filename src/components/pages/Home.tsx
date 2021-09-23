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
import { Header } from "../molecules/Header";

export const Home = memo(() => {
  const history = useHistory();
  const handlerChangePage = () => {
    history.push("/login");
  };

  return (
    <div className="home-page-wrapper">
      <Header />
      <div className="home-page">
        <h2 className="home-title">
          Make your Blog <span>Online</span>
        </h2>
        <div className="home-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the ...
          </p>
        </div>

        <Button
          text={"Learn more"}
          onClick={handlerChangePage}
          isValid={true}
        />
      </div>
    </div>
  );
});
