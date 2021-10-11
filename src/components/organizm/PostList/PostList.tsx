import * as React from "react";
import { memo } from "react";
import { IPost } from "../../../types";
import { PostCard } from "../../molecules/PostCard/PostCard";
import "./index.css";

interface IPostList {
  post: IPost[];
}

export const PostList = memo(({ post }: IPostList) => {
  return (
    <div className="post-list">
      {post?.map((post) => (
        <div key={post.id}>{/* <PostCard {...post} /> */}</div>
      ))}
    </div>
  );
});
