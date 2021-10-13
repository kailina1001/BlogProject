import { IPostSendRequest, IPostsRequest } from "./../../types/posts";
import { PostsService } from "./../../services/PostsService";
import { PublicService } from "./../../services/PublicService";
import { Action } from "redux-actions";
import { ACTIONS } from "../actions/constants";
import { call, put, takeEvery, select } from "redux-saga/effects";
import {
  setMyPostsAction,
  setPostsAction,
  setMyPostErrorAction,
  setSelectedPostAction,
} from "../actions/postsAction";

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

function* getSelectedPost({ payload: id }: Action<number>) {
  try {
    const data: { data: any } = yield call(() =>
      PublicService.getSelectedPost(id)
    );
    yield put(setSelectedPostAction(data.data));
  } catch (e: any) {}
}

function* sendPostSaga({ payload }: Action<IPostSendRequest>) {
  try {
    console.log({ payload });
    const data: { data: IPostsRequest } = yield call(() =>
      PostsService.sendPost(payload)
    );
    console.log({ data });

    // yield put(setPostsAction(data.data.results));
  } catch (e) {
    console.log({ e });
  }
}

export function* postsSaga() {
  yield takeEvery(ACTIONS.GET_POSTS_ACTION, getPostsSaga);
  yield takeEvery(ACTIONS.GET_MY_POSTS_ACTION, getMyPostsSaga);
  yield takeEvery(ACTIONS.GET_SELECTED_POST_ACTION, getSelectedPost);
  yield takeEvery(ACTIONS.SEND_POST, sendPostSaga);
}
