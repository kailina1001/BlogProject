import { BaseService } from "./BaseService";

import { IUserAuth, IUserLoginAuth, IActivationPayload } from "../types/user";

class PostsAPIService extends BaseService {
  public async getPosts() {
    return this.get("");
  }

  public async getMyPosts() {
    return this.get("my_posts/");
  }
}

export const PostsService = new PostsAPIService();
