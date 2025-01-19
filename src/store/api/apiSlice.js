import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
    reducerPath: 'publicApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://dummyjson.com/auth/',
        headers: { 'Content-Type': 'application/json' },          
    }),
    endpoints: (builder) => ({
        auth: builder.mutation({
            query: (credentials) => ({
              url: 'login',
              method: 'POST',
              body: {
                username: credentials.username,
                password: credentials.password
            },
            }),
          }),
    })
})

export const { useAuthMutation } = baseApi

