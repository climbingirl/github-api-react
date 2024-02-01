import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GithubApiResponse, IRepo, IUser } from '../models/models';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
  endpoints: (builder) => ({
    searchUsers: builder.query<IUser[], string>({
      query: (search) => ({
        url: '/search/users',
        params: { q: search, per_page: 10 },
      }),
      transformResponse: (response: GithubApiResponse<IUser>) => response.items,
    }),
    getUserRepos: builder.query<IRepo[], string>({
      query: (userName) => `users/${userName}/repos`,
    }),
  }),
});

export const { useSearchUsersQuery, useLazyGetUserReposQuery } = githubApi;
