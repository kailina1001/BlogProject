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
      <input type="checkbox" id="check-menu" />
      <label htmlFor="check-menu"></label>
      <div className="burger-line first"></div>
      <div className="burger-line second"></div>
      <div className="burger-line third"></div>
      <div className="burger-line fourth"></div>
      <nav className="main-menu">
        <div className="navigation-wrapper">
          <ul className="text-navigation">
            <li>
              <Link className="for-link" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/login"}>
                Login
              </Link>
            </li>
            <li>
              <Link className="for-link" to={"/registration"}>
                Registration
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
                Success New Password
              </Link>
            </li>
          </ul>
        </div>
        {/* <a href="#" className="link">
          Пункт 1
        </a>
        <a href="#" className="link">
          Пункт 2
        </a>
        <a href="#" className="link">
          Пункт 3
        </a>
        <a href="#" className="link">
          Пункт 4
        </a> */}
      </nav>
    </div>
  );
});
