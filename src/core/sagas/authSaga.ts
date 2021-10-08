import { setProfileAction } from "./../actions/appActions";
import { sendLoginDataSuccessAction } from "./../actions/loginActions";
import { IRegistrationState } from "./../reducers/registrationReducer";
import { getRegistrationSelector } from "./../selectors/registrationSelectors";
import { setUserNameAction } from "./../actions/registrationActions";
import { Action } from "redux-actions";
import { IActivationPayload, ITokens, IUserAuth } from "../../types/user";
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
    /*  yield put(sendRegistrationDataErrorAction(null)); */

    yield call(() =>
      AuthService.registration({
        username,
        password,
        email,
      })
    );
  } catch (e: any) {
    console.log({ e });

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
  } catch (e) {
    console.log({ e });
  }
}

function* loginSaga({
  payload: { username, password, email },
}: Action<IUserAuth>) {
  try {
    yield put(sendLoginDataErrorAction(null));

    const data: { data: ITokens } = yield call(() =>
      AuthService.login({
        password,
        email,
      })
    );
    const { access, refresh } = data?.data as any;

    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    yield put(sendLoginDataSuccessAction(true));

    const usersData: { data: ITokens } = yield call(() =>
      AuthService.getUsers()
    );

    const users = usersData?.data as any;

    console.log({ usersData });

    yield put(setProfileAction(users.results[0]));

    console.log({ users });
  } catch (e) {
    console.log({ e });
    yield put(
      sendLoginDataErrorAction(
        "No active account found with the given credentials"
      )
    );
  }
}

export function* authSaga() {
  yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, registrationSaga);
  yield takeEvery(ACTIONS.SEND_LOGIN_DATA, loginSaga);
  yield takeEvery(
    ACTIONS.SEND_REGISTRATION_CONFIRMATION,
    confirmationRegistrationSaga
  );
}
