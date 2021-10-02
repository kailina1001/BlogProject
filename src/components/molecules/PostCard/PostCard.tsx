import * as React from "react";
import { memo } from "react";
import { PostCreator } from "../../atoms/PostCreator";
import { PostDate } from "../../atoms/PostDate";
import { PostText } from "../../atoms/PostText";
import { PostTitle } from "../../atoms/PostTitle";

import "./index.css";

export const PostCard = memo(() => {
  return (
    <div className="post-card">
      <img
        className="post-pic"
        src={"https://picsum.photos/296/120"}
        alt={"post-pic"}
      />
      <PostTitle title={"What is Lorem Ipsum?"} />
      <PostText
        text={
          "Lorem Ipsum is simply dummy text of the printing and  typesetting industry..."
        }
      />
      <div className="post-date-creator">
        <PostDate date={"13.09.2021"} />
        <PostCreator name={"Paul"} />
      </div>
    </div>
  );
});
