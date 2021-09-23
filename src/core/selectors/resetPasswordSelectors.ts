import { IState } from "../types";

export const getResetPasswordSelector = ({ email_reset_password }: IState) =>
  email_reset_password;
