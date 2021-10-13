import { BaseService } from "./BaseService";

export class GuestService extends BaseService {
  private storage: Storage;
  constructor() {
    super();
    this.storage = localStorage;
  }

  protected async getHeaders() {
    return {
      headers: {
        Authorization: ``,
      },
    };
  }

  public async refreshToken(refreshToken: string) {
    const data = new FormData();

    data.append("refresh", refreshToken);

    return this.post("jwt/refresh/", data);
  }
}

export const guestService = new GuestService();

/* export class GuestService extends BaseService {
  private storage: Storage;
  constructor() {
    super();
    this.storage = localStorage;
  }

  public async getHeaders() {
    return {
      headers: {
        Authorization: ``,
      },
    };
  }
}

export const guestService = new GuestService(); */
