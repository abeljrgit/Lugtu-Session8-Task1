import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const blogPostApi = createApi({
  // this is unique key that define where redux store the data
  reducerPath: 'blogPostApi',

  // base query will request the data
  // fetchBaseQuery, is a lightweight fetch wrapper that
  // automatically handles request and response in a
  // similar way common libraries like axios
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),

  // set the operations that we want to perform against the server
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllPostsQuery } = blogPostApi;
