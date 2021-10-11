import React, { useEffect } from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Title } from "../atoms/Title";
import { BlogTemplate } from "../template/BlogTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { AddBtn } from "../atoms/AddBtn";
import { useDispatch, useSelector } from "react-redux";
import { BackBtn } from "../atoms/BackBtn";
import { InputTitle } from "../atoms/InputTitle";
import { InputText } from "../atoms/InputText";
import { Header } from "../molecules/Header";
import { AddPostTemplate } from "../template/AddPostTemplate";

export const AddPost = memo(() => {
  const history = useHistory();
  const addImg = () => {
    history.push("/");
  };
  const backBtn = () => {
    history.push("/all-posts");
  };

  return (
    <div className="add-post-wrapper">
      <AddPostTemplate
        titleBlock={
          <div className="add-post-title">
            <BackBtn text={"< Back"} onClick={backBtn} />
            <div className="add-new-post-title">
              <h2>{"Add new post"}</h2>
            </div>
          </div>
        }
        mainBlock={
          <>
            <div className="add-post-inputs">
              <div>
                <InputTitle text={"Title"} />
                <InputTitle text={"Lesson number"} />
                <InputText text={"Text"} />
              </div>
              <div className="add-post-inputs-img">
                <h4>Image</h4>
                <AddBtn text={"Add"} onClick={backBtn} />
              </div>
            </div>
            <div className="add-post-main-input">
              <Button text={"Add"} isValid={true} onClick={addImg} />
            </div>
          </>
        }
      />
    </div>
  );
});
