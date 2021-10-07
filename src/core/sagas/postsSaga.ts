import { IPostsRequest } from "./../../types/posts";
import { PostsService } from "./../../services/PostsService";
import { Action } from "redux-actions";
import { ACTIONS } from "../actions/constants";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { setPostsAction } from "../actions/postsAction";

function* getPostsSaga() {
  try {
    console.log("hello");

    const data: { data: IPostsRequest } = yield call(() =>
      PostsService.getPosts()
    );
    console.log({ data });

    yield put(setPostsAction(data.data.results));
  } catch (e: any) {}
}

export function* postsSaga() {
  yield takeEvery(ACTIONS.GET_POSTS_ACTION, getPostsSaga);
}
