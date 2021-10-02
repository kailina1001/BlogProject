import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IPostDate {
  date: any;
}

export const PostDate = memo(({ date }: IPostDate) => (
  <p className="post-date">{date}</p>
));
