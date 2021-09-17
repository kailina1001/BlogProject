import React from "react";
import "./App.css";
import { Button } from "./components/atoms/Button";
import { Input } from "./components/atoms/Input";
import { Header } from "./components/molecules/Header";
import { MainTemplate } from "./components/template/MainTemplate";
import { Login } from "./components/pages/Login";
import { Registration } from "./components/pages/Registration";
import { RegConfirmation } from "./components/pages/RegConfirmation";
import { SuccessRegistration } from "./components/pages/SuccessRegistration";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { ResetPassword } from "./components/pages/ResetPassword";
import { ResetPasswordConfirm } from "./components/pages/ResetPasswordConfirm";
import { NewPassword } from "./components/pages/NewPassword";
import { SuccessNewPassword } from "./components/pages/SuccessNewPassword";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/reg-confirmation">
            <RegConfirmation />
          </Route>
          <Route exact path="/success-registration">
            <SuccessRegistration />
          </Route>
          <Route exact path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact path="/reset-password-confirm">
            <ResetPasswordConfirm />
          </Route>
          <Route exact path="/new-password">
            <NewPassword />
          </Route>
          <Route exact path="/success-new-password">
            <SuccessNewPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
