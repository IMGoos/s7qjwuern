import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../Types/Post/types";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getAllPosts: builder.query<Array<IPost>, void>({
            query: () => '/posts',
        }),
        searchPosts: builder.query<Array<IPost>, string>({
            query: (searchTerm) => `/posts?title=${searchTerm}`,
        }),
    })
})

export const { useGetAllPostsQuery, useSearchPostsQuery } = api;