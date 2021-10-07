import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";
import { IPost } from "../../types/posts";

export const setPostsAction = createAction(ACTIONS.SET_POSTS)<IPost[] | null>();

export const setMyPostsAction = createAction(ACTIONS.SET_MY_POSTS)<
  IPost[] | null
>();

export const getPostsAction = createAction(ACTIONS.GET_POSTS_ACTION)();

export const getMyPostsAction = createAction(ACTIONS.GET_MY_POSTS_ACTION)<
  IPost[] | null
>();
