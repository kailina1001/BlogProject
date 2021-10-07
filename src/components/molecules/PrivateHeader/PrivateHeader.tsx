import React, { useCallback, useEffect } from "react";
import { memo } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpenHeader } from "../../../core";
import { getAppState } from "../../../core/selectors/appSelectors";
import userpic from "../../img/userpic.svg";
import logoutPic from "../../img/logoutPic.svg";

export const PrivateHeader = memo(() => {
  const { isOpenHeader, username } = useSelector(getAppState);
  console.log({ isOpenHeader });

  const dispatch = useDispatch();

  const toggleMenu = useCallback(() => {
    dispatch(setIsOpenHeader(!isOpenHeader));
  }, [dispatch, isOpenHeader]);

  useEffect(() => {
    return () => {
      dispatch(setIsOpenHeader(false));
    };
  }, [dispatch]);
  return (
    <div className="header-wrapper">
      <div className="burger-menu">
        <input type="checkbox" id="check-menu" />
        <label htmlFor="check-menu"></label>
        <div className="burger-line first"></div>
        <div className="burger-line second"></div>
        <div className="burger-line third"></div>
        <div className="burger-line fourth"></div>
        <div className="username-pic">
          <img src={userpic} alt="user" />
          <p className="user-name">{username}</p>
        </div>
        <nav className="main-menu">
          <div className="navigation-wrapper">
            <ul className="text-navigation">
              <li>
                <Link className="for-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="for-link" to={"/all-posts"}>
                  All Posts
                </Link>
              </li>
              <li>
                <Link className="for-link" to={"/my-posts"}>
                  My Posts
                </Link>
              </li>
              <li>
                <Link className="for-link" to={"/add-posts"}>
                  + Add Posts
                </Link>
              </li>
              <li>
                <Link className="for-link" to={"/"}>
                  Log out <img src={logoutPic} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
});
