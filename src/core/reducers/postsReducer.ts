import { posts } from "./../../mock/index";
import { MyPosts } from "./../../components/pages/MyPosts";
import { IPost } from "./../../types/posts";
import { ActionType, createReducer } from "typesafe-actions";

import { setIsOpenHeader } from "../../core/actions";
import { setMyPostsAction, setPostsAction } from "../actions/postsAction";

export interface IPostsState {
  posts: IPost[] | null;
  MyPosts: IPost[] | null;
}

const defaultState: IPostsState = {
  posts: null,
  MyPosts: null,
};

const actions = {
  setPostsAction,
  setMyPostsAction,
};

export const postsReducer = createReducer<
  IPostsState,
  ActionType<typeof actions>
>(defaultState)
  .handleAction(setPostsAction, (state, { payload: posts }) => ({
    ...state,
    posts,
  }))
  .handleAction(setMyPostsAction, (state, { payload: myPosts }) => ({
    ...state,
    myPosts,
  }));
