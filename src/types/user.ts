export interface IUserAuth {
  username: string;
  password: string;
  email: string;
}

export interface IUserLoginAuth {
  password: string;
  email: string;
}

export interface IActivationPayload {
  uid: string;
  token: string;
}
export interface ITokens {
  access: string;
  refresh: string;
}

export interface IProfile {
  username: string | null;
  id: number | null;
  email: string | null;
}
