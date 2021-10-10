import React, { useEffect } from "react";
import { memo } from "react";
import { Title } from "../atoms/Title";
import { BlogTemplate } from "../template/BlogTemplate";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";
import { AddBtn } from "../atoms/AddBtn";
import { IPost } from "../../types/posts";
import { posts } from "../../mock/index";
import { MyPostCard } from "../molecules/MyPostCard";
import { useDispatch, useSelector } from "react-redux";
import { getAppState } from "../../core/selectors/appSelectors";
import { getMyPostsState } from "../../core/selectors/myPostsSelectors";
import { getMyPostsAction } from "../../core/actions/postsAction";

/* interface IPostList {
  post: IPost[];
} */

export const MyPosts = memo((/* { post }: IPostList */) => {
  const dispatch = useDispatch();
  const { myPosts } = useSelector(getMyPostsState);
  const { username } = useSelector(getAppState);

  useEffect(() => {
    dispatch(getMyPostsAction());
  }, [dispatch]);

  console.log("MyPosts:", { MyPosts });

  const history = useHistory();
  const addPost = () => {
    history.push("/add-posts");
  };

  return (
    <div className="all-posts-page">
      <BlogTemplate
        titleBlock={
          <div className="blog-template-title">
            <Title title={"My posts"} isActive={true} />
            <AddBtn text={"+ Add"} onClick={addPost} />
          </div>
        }
        mainBlock={
          <div className="blog-template-body">
            {myPosts?.map((post) => (
              <div key={post.id}>{<MyPostCard key={post.id} {...post} />}</div>
            ))}
          </div>
        }
      />
    </div>
  );
});
