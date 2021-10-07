import { ActionType, createReducer } from "typesafe-actions";

import { setIsOpenHeader, setProfileAction } from "../../core/actions";
import { IProfile } from "../../types/user";

export interface IAppState extends IProfile {
  isOpenHeader: boolean;
}

const defaultState: IAppState = {
  isOpenHeader: false,
  username: null,
  id: null,
  email: null,
};

const actions = {
  setIsOpenHeader,
  setProfileAction,
};

export const appReducer = createReducer<IAppState, ActionType<typeof actions>>(
  defaultState
)
  .handleAction(setIsOpenHeader, (state, { payload }) => ({
    ...state,
    isOpenHeader: payload,
  }))
  .handleAction(
    setProfileAction,
    (state, { payload: { email, username, id } }) => ({
      ...state,
      id,
      username,
      email,
    })
  );
