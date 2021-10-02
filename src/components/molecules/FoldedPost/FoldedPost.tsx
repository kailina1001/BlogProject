import { memo } from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export const FoldedPost = memo(() => {
  return <div className="folded-post-wrapper"></div>;
});
