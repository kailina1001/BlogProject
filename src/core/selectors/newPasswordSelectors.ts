import { IState } from "../types";

export const getNewPasswordSelector = ({ new_password }: IState) =>
  new_password;
