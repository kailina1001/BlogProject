import * as React from "react";
import { memo } from "react";
import { BurgerMenu } from "../BurgerMenu";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export const Header = memo(() => {
  return (
    <div className="header-wrapper">
      <nav>
        <div className="burger-btn">
          <span />
        </div>
        <div>
          <ul className="text-navigation">
            <li>
              <Link className="for-link" to={"/home"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/login"}>
                login
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/registration"}>
                registration
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/reg-confirmation"}>
                Registration Confirmation
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/success-registration"}>
                Success Registration
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/reset-password"}>
                Reset Password
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/reset-password-confirm"}>
                Reset Password Confirm
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/new-password"}>
                New password
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/success-new-password"}>
                SuccessNewPassword
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <BurgerMenu /> */}
    </div>
  );
});
