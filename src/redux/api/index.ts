import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:9000/api/v1',
    credentials: 'include'
})

export const baseApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: baseQuery,
    endpoints: () => ({})
    });
