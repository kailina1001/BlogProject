import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IPostTitle {
  title: string;
}

export const PostTitle = memo(({ title }: IPostTitle) => (
  <h2 className="post-title">{title}</h2>
));
