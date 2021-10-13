import { BaseService, projectAxios } from "./BaseService";

import { IUserAuth, IUserLoginAuth, IActivationPayload } from "../types/user";
import { IPostSendRequest } from "../types/posts";

class PostsAPIService extends BaseService {
  public async getMyPosts() {
    return this.get("my_posts/");
  }

  public async sendPost({ image, text, title, lesson_num }: IPostSendRequest) {
    const { headers } = await this.getHeaders();
    if (this.credentials?.URL) {
      const { URL } = this.credentials;

      const formData = new FormData();
      formData.append("image", image.file as Blob);
      formData.append("text", text);
      formData.append("title", title);
      formData.append("lesson_num", String(lesson_num));

      return await projectAxios.post(`${URL}/blog/posts/`, formData, {
        headers: { ...headers, "Content-Type": "multipart/form-data" },
      });
    }
  }
}
//для приватных url

export const PostsService = new PostsAPIService();
