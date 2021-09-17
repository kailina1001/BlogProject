import * as React from "react";
import { memo } from "react";
import "./index.css";

interface ITitle {
  title: string;
  isActive: boolean;
}

export const Title = memo(({ title, isActive }: ITitle) => (
  <h2 className={isActive ? "active-title" : "not-active-title"}>{title}</h2>
));
