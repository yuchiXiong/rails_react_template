import api, { IPagination, IResponse } from './api';

export interface IPost {
  id: number,
  title: string,
  articles: {
    id: number,
    title: string,
    link: string,
  }[],
}


export default {
  getPosts(): Promise<IResponse<{
    posts: IPost[],
    pagination: IPagination
  }>> {
    return api.get('/posts');
  }
};
