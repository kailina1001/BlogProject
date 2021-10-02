import { IRegistrationState } from "./../reducers/registrationReducer";
import { getRegistrationSelector } from "./../selectors/registrationSelectors";
import { setUserNameAction } from "./../actions/registrationActions";
import { Action } from "redux-actions";
import { IActivationPayload, IUserAuth } from "../../types/user";
import { ACTIONS } from "../actions/constants";
import { call, put, takeEvery, select } from "redux-saga/effects";
import { sendRegistrationDataErrorAction } from "./../actions/registrationActions";
import { AuthService } from "../../services/AuthService";
import { getLoginSelector } from "../selectors/loginSelectors";
import { sendLoginDataErrorAction } from "../actions/loginActions";

/* function* sendRegistrationSaga({ */
function* registrationSaga({
  payload: { username, password, email },
}: Action<IUserAuth>) {
  try {
    console.log({ username, password, email });
    yield put(sendRegistrationDataErrorAction(null));

    yield call(() =>
      AuthService.registration({
        username,
        password,
        email,
      })
    );
  } catch (e: any) {
    const error = Object.keys(e.response.data).reduce(
      (acc: string, field: string) => {
        const value = e.response.data[field];
        return acc + value.join(" ");
      },
      ""
    );
    console.log({ error });

    yield put(sendRegistrationDataErrorAction(error));
  }
}

function* loginSaga({
  payload: { username, password, email },
}: Action<IUserAuth>) {
  try {
    const { email, password }: IRegistrationState = yield select(
      getLoginSelector
    );

    yield call(() =>
      AuthService.login({
        password,
        email,
      })
    );
  } catch (e) {
    yield put(setUserNameAction(""));
    yield put(sendLoginDataErrorAction({ e }));
  }
}

function* confirmationRegistrationSaga({
  payload: { token, uid },
}: Action<IActivationPayload>) {
  try {
    yield call(() =>
      AuthService.activateUser({
        token,
        uid,
      })
    );
  } catch (e) {}
}

export function* authSaga() {
  yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, registrationSaga);
  yield takeEvery(ACTIONS.SEND_LOGIN_DATA, loginSaga);
  yield takeEvery(
    ACTIONS.SEND_REGISTRATION_CONFIRMATION,
    confirmationRegistrationSaga
  );
}
