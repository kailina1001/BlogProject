import React from "react";
import { memo } from "react";
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

export const AllPosts = memo(() => {
  const history = useHistory();
  /*   const allPosts = () => {
    history.push("/all-posts");
  }; */
  return (
    <div className="all-posts-page">
      <BlogTemplate
        titleBlock={
          <div className="blog-template-title">
            <Title title={"All posts"} isActive={true} />
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
