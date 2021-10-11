import * as React from "react";
import { memo } from "react";
import { IPost } from "../../../types/posts";
import { PostCreator } from "../../atoms/PostCreator";
import { PostDate } from "../../atoms/PostDate";
import { PostText } from "../../atoms/PostText";
import { PostTitle } from "../../atoms/PostTitle";
import "./index.css";

export const PostCard = memo((post: IPost) => {
  return (
    <div>
      <div className="post-card">
        <img className="post-pic" src={post.image} alt={"post-pic"} />
        <PostTitle title={post.title} />
        <PostText text={post.text} />
        <div className="post-date-creator">
          <PostDate date={post.date} />
          <PostCreator name={String(post.author)} />
        </div>
      </div>
    </div>
  );
});
