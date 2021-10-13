import { posts } from "./../../mock/index";
import { MyPosts } from "./../../components/pages/MyPosts";
import { IPost } from "./../../types/posts";
import { ActionType, createReducer } from "typesafe-actions";
import { setIsOpenHeader } from "../../core/actions";
import {
  setMyPostErrorAction,
  setMyPostsAction,
  setPostsAction,
  setSelectedPostAction,
} from "../actions/postsAction";

export interface IPostsState {
  posts: IPost[] | null;
  myPosts: IPost[] | null;
  selectedPost: IPost[] | null;
  myPostError: string | null;
}

const defaultState: IPostsState = {
  posts: null,
  myPosts: null,
  selectedPost: null,
  myPostError: null,
};

const actions = {
  setPostsAction,
  setMyPostsAction,
  setSelectedPostAction,
  setMyPostErrorAction,
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
  }))
  .handleAction(setSelectedPostAction, (state, { payload: selectedPost }) => ({
    ...state,
    selectedPost,
  }))
  .handleAction(setMyPostErrorAction, (state, { payload: myPostError }) => ({
    ...state,
    myPostError,
  }));
