import React, { useEffect } from "react";
import { memo } from "react";
import { useHistory, useParams } from "react-router";
import { Title } from "../atoms/Title";
import { BlogTemplate } from "../template/BlogTemplate";
import { PostCard } from "../molecules/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPostAction } from "../../core/";
import { getPostsState } from "../../core/selectors/postsSelectors";
import { AddBtn } from "../atoms/AddBtn";
import { posts } from "../../mock";

export const SelectedPost = memo(() => {
  const params = useParams() as any;
  const { selectedPost } = useSelector(getPostsState) as any;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSelectedPostAction(params.id));
  }, [dispatch, params.id]);

  const history = useHistory();
  const backToAllPost = () => {
    history.push("/all-posts");
  };

  return (
    <>
      <BlogTemplate
        titleBlock={
          <div className="blog-template-title">
            <Title title={""} isActive={true} />
            <AddBtn text={"Back"} onClick={backToAllPost} />
          </div>
        }
        mainBlock={
          <div className="blog-template-body">
            {selectedPost && (
              <PostCard key={selectedPost.id} {...selectedPost} />
            )}
          </div>
        }
      />
    </>
  );
});
