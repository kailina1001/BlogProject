import axios from "axios";

interface ICredentials {
  URL: string;
}

export const projectAxios = axios.create();

projectAxios.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { status, data } = error.response;

    if (status !== 401) {
      return Promise.reject(error);
    }
  }
);

export class BaseService {
  protected _credentials?: ICredentials;
  protected _prefix: string = "";

  public setCredentials(credentials: ICredentials): void {
    this._credentials = credentials;
  }

  protected getCurrentUrl(path: string): string {
    if (this.credentials) {
      return this.prefix
        ? `${this.credentials.URL}/${this.prefix}/${path}`
        : `${this.credentials.URL}/${path}`;
    }

    return `${this.prefix}/${path}`;
  }

  protected get credentials() {
    return this._credentials;
  }

  protected async getHeaders() {
    try {
      const { token } = await BaseService.getTokens();

      return {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  public static async getTokens() {
    const token = localStorage.getItem("access");
    const refresh = localStorage.getItem("refresh");

    return { token, refresh };
  }

  public set prefix(prefix: string | undefined) {
    this._prefix = prefix || "";
  }

  public get prefix(): string | undefined {
    return this._prefix;
  }

  public async get(route: string) {
    const url: string = this.getCurrentUrl(route);
    const headers = await this.getHeaders();

    return await projectAxios.get(url, headers);
  }

  public async post(route: string, data?: any) {
    const url: string = this.getCurrentUrl(route);
    console.log({ url });
    const headers = await this.getHeaders();

    return await projectAxios.post(url, data, headers);
  }

  public async put(route: string, data: any) {
    const url: string = this.getCurrentUrl(route);
    const headers = await this.getHeaders();
    return await projectAxios.put(url, data, headers);
  }

  public async patch(route: string, data: any) {
    const url: string = this.getCurrentUrl(route);
    const headers = await this.getHeaders();
    return await projectAxios.patch(url, data, headers);
  }

  public async remove(route: string) {
    const url: string = this.getCurrentUrl(route);
    const headers = await this.getHeaders();
    return await projectAxios.delete(url, headers);
  }
}
