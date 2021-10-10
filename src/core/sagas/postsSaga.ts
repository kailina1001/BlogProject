import { IPostsRequest } from "./../../types/posts";
import { PostsService } from "./../../services/PostsService";
import { PublicService } from "./../../services/PublicService";
import { Action } from "redux-actions";
import { ACTIONS } from "../actions/constants";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { setMyPostsAction, setPostsAction } from "../actions/postsAction";

function* getPostsSaga() {
  try {
    console.log("hello");

    const data: { data: IPostsRequest } = yield call(() =>
      PublicService.getPosts()
    );
    console.log({ data });

    yield put(setPostsAction(data.data.results));
  } catch (e: any) {}
}

function* getMyPostsSaga() {
  try {
    console.log("bye");

    const data: { data: any } = yield call(() => PostsService.getMyPosts());
    console.log({ data });

    yield put(setMyPostsAction(data.data));
  } catch (e: any) {}
}

export function* postsSaga() {
  yield takeEvery(ACTIONS.GET_POSTS_ACTION, getPostsSaga);
  yield takeEvery(ACTIONS.GET_MY_POSTS_ACTION, getMyPostsSaga);
}
