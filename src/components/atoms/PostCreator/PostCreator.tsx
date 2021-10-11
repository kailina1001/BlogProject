import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IName {
  name: string;
}

export const PostCreator = memo(({ name }: IName) => (
  <p className="post-creator">{name}</p>
));
