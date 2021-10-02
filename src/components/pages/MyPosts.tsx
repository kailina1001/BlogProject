import React from "react";
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
import { PostCard } from "../molecules/PostCard";

export const MyPosts = memo(() => {
  const history = useHistory();
  /* const allPosts = () => {
    history.push("/");
  }; */
  return (
    <div className="all-posts-page">
      <BlogTemplate
        titleBlock={
          <div className="blog-template-title">
            <Title title={"My posts"} isActive={true} />
            <AddBtn text={"+ Add"} />
          </div>
        }
        mainBlock={
          <div className="blog-template-body">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        }
      />
    </div>
  );
});
