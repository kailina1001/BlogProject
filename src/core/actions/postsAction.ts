import { createAction } from "typesafe-actions";

import { ACTIONS } from "./constants";
import { IPost, IPostSendRequest } from "../../types/posts";

export const setPostsAction = createAction(ACTIONS.SET_POSTS)<IPost[] | null>();

export const setMyPostsAction = createAction(ACTIONS.SET_MY_POSTS)<
  IPost[] | null
>();

export const getPostsAction = createAction(ACTIONS.GET_POSTS_ACTION)();

export const getMyPostsAction = createAction(ACTIONS.GET_MY_POSTS_ACTION)();

export const getSelectedPostAction = createAction(
  ACTIONS.GET_SELECTED_POST_ACTION
)<number>();

export const setSelectedPostAction = createAction(
  ACTIONS.SET_SELECTED_POST_ACTION
)<IPost[] | null>();

export const setMyPostErrorAction = createAction(
  ACTIONS.SET_MY_POST_ERROR_ACTION
)<string>();

export const sendPostAction = createAction(
  ACTIONS.SEND_POST
)<IPostSendRequest>();
