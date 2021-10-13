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
import { PostCard } from "../molecules/PostCard";
import { posts } from "../../mock/index";
import { IPost } from "../../types/posts";
import { getPostsAction } from "../../core/actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import { getPostsState } from "../../core/selectors/postsSelectors";
import { getAppState } from "../../core/selectors/appSelectors";

interface IPostList {
  post: IPost[];
}

export const AllPosts = memo(({ post }: IPostList) => {
  const dispatch = useDispatch();

  const { posts } = useSelector(getPostsState);

  const { username } = useSelector(getAppState);

  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  console.log("Posts:", { posts });

  const history = useHistory();
  const addPost = () => {
    history.push("/posts/add");
  };

  return (
    <div className="all-posts-page">
      <BlogTemplate
        titleBlock={
          <div className="blog-template-title">
            <Title title={"All posts"} isActive={true} />
            <AddBtn text={"+ Add"} onClick={addPost} />
          </div>
        }
        mainBlock={
          <div className="blog-template-body">
            {posts?.map((post) => {
              return (
                <Link key={post.id} to={`posts/${post.id}`}>
                  <PostCard key={post.id} {...post} />
                </Link>
              );
            })}
          </div>
        }
      />
    </div>
  );
});
