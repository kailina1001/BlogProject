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
import { IPost } from "../../types/posts";
import { posts } from "../../mock/index";
import { MyPostCard } from "../molecules/MyPostCard";

interface IPostList {
  post: IPost[];
}

export const MyPosts = memo(({ post }: IPostList) => {
  /*   const history = useHistory();
  const allPosts = () => {
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
            {posts?.map((post) => (
              <div key={post.id}>
                {/*  <MyPostCard key={post.id} {...post} /> */}
              </div>
            ))}
          </div>
        }
      />
    </div>
  );
});
