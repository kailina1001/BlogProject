import * as React from "react";
import { memo } from "react";
import { IPost } from "../../../types/posts";
import { PostDate } from "../../atoms/PostDate";
import { PostText } from "../../atoms/PostText";
import { PostTitle } from "../../atoms/PostTitle";
import "./index.css";

interface IFoldedMyPost {
  myPosts?: boolean;
}

export const MyPostCard = memo((post: IPost, { myPosts }: IFoldedMyPost) => {
  return (
    <div>
      <div className="post-card">
        <img className="post-pic" src={post.image} alt={"post-pic"} />
        <PostTitle title={post.title} />
        <PostText text={post.text} />
        <div className="post-date-creator">
          <PostDate date={post.date} />
        </div>
      </div>
    </div>
  );
});
