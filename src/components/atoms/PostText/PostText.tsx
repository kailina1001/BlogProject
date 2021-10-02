import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IText {
  text: string;
}

export const PostText = memo(({ text }: IText) => (
  <p className="post-text">{text}</p>
));
