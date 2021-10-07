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
import logoutPic from "../../img/logoutPic.svg";

export const AddPostHeader = memo(() => {
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
    <div className="header-wrapper-addpost">
      <div className="burger-menu">
        <input type="checkbox" id="check-menu" />
        <label htmlFor="check-menu"></label>
        <div className="burger-line-addpost first"></div>
        <div className="burger-line-addpost second"></div>
        <div className="burger-line-addpost third"></div>
        <div className="burger-line-addpost fourth"></div>
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
